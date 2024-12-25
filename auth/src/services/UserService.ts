import { UserRepoInterface } from "../repositories/interfaces/UserRepoInterface";
import bcrypt from 'bcrypt'
import jwt, { JwtPayload, VerifyCallback, VerifyErrors } from "jsonwebtoken";
import handleError from '../util/handleError'
import { JwtWithUsername } from '../constants/types'
import { IUser } from "../model/UserModel";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string || 'secret'
const ACCESS_EXPIRES_IN = '60s'
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string || 'secret'
const REFRESH_EXPIRES_IN = '1d'
const ROOT_USER = 'arunkb@gmail.com'


export class UserService {

  constructor(
    private userRepo: UserRepoInterface
  ) { }

  async signup(name: string, email: string, password: string) {
    try {
      const hashedPwd = await bcrypt.hash(password, 10)
      const user = {
        name,
        email,
        password: hashedPwd,
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

  async login(email: string, password: string) {
    try {
      const foundUser = await this.userRepo.findByEmail(email)
      if (!foundUser) return { err: 404, data: null }

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

      let res: ResType = { err: null, data: null }
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
        res.err = null
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

  async jwtVerify(token: string) {
    type ResType = {
      err: number | null
      data: string | null
    }
    try {
      let res: ResType = { err: null, data: null }
      const verifyCallback: VerifyCallback = (err, decoded) => {
        console.log(decoded)
        console.log(err)

        if (err || !decoded || typeof decoded === 'string') {
          res.err = 403
          res.data = null
          return
        }
        const payload = decoded as JwtWithUsername
        if (!payload?.username) {
          res.err = 403
          res.data = null
          return
        }
        const username = payload.username
        res.err = null
        res.data = username
      }

      jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        verifyCallback
      )
      console.log(res)
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
        role:'admin'
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