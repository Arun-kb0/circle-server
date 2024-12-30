import IUserRepo from "../interfaces/IUserRepo";
import bcrypt from 'bcrypt'
import jwt, { JwtPayload, VerifyCallback, VerifyErrors } from "jsonwebtoken";
import handleError from '../util/handleError'
import { IUser } from "../model/UserModel";
import IUserService, { SvcFuncReturnType } from '../interfaces/IUserService'
import { IUserOtp } from "../model/UserOtpModel";
import getOtpTemplate from '../util/getOtpTemplate'
import IUserOtpRepo from "../interfaces/IUserOtpRepo";
import { validateRequest } from "../util/validations";
import nodeMailerTransport from '../config/nodeMailerTransport'


const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string || 'secret'
const ACCESS_EXPIRES_IN = '60s'
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string || 'secret'
const REFRESH_EXPIRES_IN = '1d'
const ROOT_USER = 'arunkb@gmail.com'
const SMTP_USER = process.env.SMTP_USER


export class UserService implements IUserService {

  constructor(
    private userRepo: IUserRepo,
    private userOtpRepo: IUserOtpRepo
  ) { }

  async signup(name: string, email: string, password: string) {
    try {
      const hashedPwd = await bcrypt.hash(password, 10)
      const otpResData = await this.sendOtp({ name, email, password: hashedPwd })
      if (otpResData.err) return otpResData
      const response = {
        email,
        status: 'success',
        otpId: otpResData.data?._id
      }
      return { err: null, data: response }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null, errMsg: message }
    }
  }

  async sendOtp(otpData: Partial<IUserOtp>, isPassword = false) {
    try {
      const OTP_EXPIRES_AT = new Date(Date.now() + 2 * 60 * 1000)
      const { email, name, password } = otpData
      let templateDes = ''
      if (isPassword) {
        if (!email || !password) return { err: 404, data: null, errMsg: 'otp data fields are empty.' }
        templateDes = 'verify email address to change password'
      } else {
        if (!email || !name || !password) return { err: 404, data: null, errMsg: 'otp data fields are empty.' }
        templateDes = 'to verify your email address and complete signup to Circle'
      }

      const { otpHtmlTemplate, otp } = getOtpTemplate(templateDes)
      const mailOptions = {
        from: SMTP_USER,
        to: email,
        subject: 'verify email',
        html: otpHtmlTemplate
      }
      const hashedOtp = await bcrypt.hash(String(otp), 10)

      let newOtpData: IUserOtp | null = null
      if (isPassword) {
        const hashedPwd = await bcrypt.hash(password, 10)
        newOtpData = await this.userOtpRepo.create({
          email,
          password: hashedPwd,
          otp: hashedOtp,
          expireAt: OTP_EXPIRES_AT
        })
      } else {
        newOtpData = await this.userOtpRepo.create({
          name,
          email,
          password,
          otp: hashedOtp,
          expireAt: OTP_EXPIRES_AT
        })
      }

      if (!newOtpData) return { err: 500, data: null, errMsg: 'otp user not created.' }
      await nodeMailerTransport.sendMail(mailOptions)

      return { err: null, data: newOtpData }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null, errMsg: message }
    }
  }

  async resendOtp(email: string, otpId: string,isPassword=false) {
    try {
      const otpData = await this.userOtpRepo.findById(otpId)
      if (!otpData) return { err: 404, errMsg: 'no otp details found in db', data: null }
      const { name, password } = otpData
      const res = await this.sendOtp({ email, password, name },isPassword)
      return res
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null, errMsg: message }
    }
  }

  async verifyOtp(email: string, otp: number, otpId: string) {
    try {
      const otpData = await this.userOtpRepo.findById(otpId)
      console.log("otpData from db")
      console.log(otpData)

      if (!otpData) return { err: 404, errMsg: 'otp data not found.', data: null }
      console.log("expr = ", otpData?.expireAt?.toLocaleString())
      console.log("now = ", new Date(Date.now()).toLocaleString())
      console.log("time diff exp - now = ", otpData?.expireAt?.getTime() - Date.now())

      const { expireAt, otp: hashedOtp, password, name } = otpData
      if (expireAt.getTime() < Date.now()) return { err: 408, errMsg: 'otp expired.', data: null }
      const isValidOtp = await bcrypt.compare(String(otp), hashedOtp)
      if (!isValidOtp) return { err: 410, errMsg: 'invalid otp.', data: null }

      const user = {
        name,
        email,
        password
      }
      const newUser = await this.userRepo.create({ ...user, role: 'user' })

      const accessToken = jwt.sign(
        { "username": newUser.email },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_EXPIRES_IN }
      )
      const refreshToken = jwt.sign(
        { "username": newUser.email },
        REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
      )

      const updatedUser = await this.userRepo.update(newUser._id, { refreshToken })
      if (!updatedUser) return { err: 409, data: null }

      const data = {
        user: newUser,
        accessToken,
        refreshToken
      }
      return { err: null, data }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code, errMsg: message, data: null }
    }
  }

  async resetPassword(email: string, password: string) {
    try {
      const otpResData = await this.sendOtp({ email, password }, true)
      if (otpResData.err) return otpResData
      if (!otpResData.data) return { err: 404, errMsg: 'otpData is empty.', data: null }
      const { _id: otpId } = otpResData.data
      return { err: null, data: { email, otpId } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code, errMsg: message, data: null }
    }
  }

  async resetPwdVerifyOtp(email: string, otp: number, otpId: string) {
    try {
      const otpData = await this.userOtpRepo.findById(otpId)
      console.log("otpData from db")
      console.log(otpData)

      if (!otpData) return { err: 404, errMsg: 'otp data not found.', data: null }
      console.log("expr = ", otpData?.expireAt?.toLocaleString())
      console.log("now = ", new Date(Date.now()).toLocaleString())
      console.log("time diff exp - now = ", otpData?.expireAt?.getTime() - Date.now())

      const { expireAt, otp: hashedOtp, password } = otpData
      if (expireAt.getTime() < Date.now()) return { err: 408, errMsg: 'otp expired.', data: null }
      const isValidOtp = await bcrypt.compare(String(otp), hashedOtp)
      if (!isValidOtp) return { err: 410, errMsg: 'invalid otp.', data: null }

      const user = {
        password: password
      }
      const updatedUser = await this.userRepo.findByEmailAndUpdate(email, user)
      if (!updatedUser) return { err: 409, errMsg: "updated user res is empty", data: null }
      return { err: null, data: { status: 'success', email } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code, errMsg: message, data: null }
    }
  }


  async login(email: string, password: string) {
    try {
      const foundUser = await this.userRepo.findByEmail(email)
      if (!foundUser) return { err: 404, data: null }
      if (foundUser.status === 'blocked') return { err: 409, data: null }
      if (foundUser.status === 'deleted') return { err: 410, data: null }

      const isMatch = await bcrypt.compare(password, foundUser.password)
      if (!isMatch) return { err: 401, data: null }
      const accessToken = jwt.sign(
        { "username": foundUser.email },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_EXPIRES_IN }
      )
      const refreshToken = jwt.sign(
        { "username": foundUser.email },
        REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
      )

      const updatedUser = await this.userRepo.update(foundUser._id, { refreshToken })
      const data = {
        user: updatedUser,
        token: accessToken,
        refreshToken
      }
      return { err: null, data }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async logout(token: string) {
    try {
      const user = await this.userRepo.findByToken(token)
      if (!user) return { err: 404, data: null }
      await this.userRepo.update(user._id, { refreshToken: '' })
      return { err: null, data: { status: 'success' } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async refresh(refreshToken: string) {
    type ResType = {
      err: number | null
      data: { user: IUser, accessToken: string } | null
    }

    try {
      const user = await this.userRepo.findByToken(refreshToken)
      if (!user) return { err: 404, data: null }

      let res: ResType = { err: 0, data: null }
      const verifyCallback: VerifyCallback = (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
        if (err || !decoded || typeof decoded === 'string' || user.email !== decoded.username) {
          res.err = 403
          res.data = null
          return
        }

        const accessToken = jwt.sign(
          { username: decoded.username },
          ACCESS_TOKEN_SECRET,
          { expiresIn: REFRESH_EXPIRES_IN }
        )
        res.data = { user, accessToken }
      }

      jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SECRET,
        verifyCallback
      )
      return res
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }


  }

  // * admin
  async adminSignup(name: string, email: string, password: string) {
    try {
      if (name !== ROOT_USER) return { err: 404, data: null }
      const hashedPwd = await bcrypt.hash(password, 10)
      const user = {
        name,
        email,
        password: hashedPwd,
      }
      const newUser = await this.userRepo.create({ ...user, role: 'admin' })

      const accessToken = jwt.sign(
        { "username": newUser.email, role: 'admin' },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_EXPIRES_IN }
      )
      const refreshToken = jwt.sign(
        { "username": newUser.email, role: 'admin' },
        REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
      )

      const updatedUser = await this.userRepo.update(newUser._id, { refreshToken })
      if (!updatedUser) return { err: 409, data: null }

      const data = {
        user,
        token: accessToken,
        refreshToken
      }
      return { err: null, data }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async adminLogin(email: string, password: string) {
    try {
      const foundUser = await this.userRepo.findByEmail(email)
      if (!foundUser || foundUser.name !== ROOT_USER) return { err: 404, data: null }

      const isMatch = await bcrypt.compare(password, foundUser.password)
      if (!isMatch) return { err: 401, data: null }
      const accessToken = jwt.sign(
        { "username": foundUser.email, role: 'admin' },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_EXPIRES_IN }
      )
      const refreshToken = jwt.sign(
        { "username": foundUser.email, role: 'admin' },
        REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
      )

      const updatedUser = await this.userRepo.update(foundUser._id, { refreshToken })
      const data = {
        user: updatedUser,
        token: accessToken,
        refreshToken
      }
      return { err: null, data }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }


}