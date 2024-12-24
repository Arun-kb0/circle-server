import { UserRepoInterface } from "../repositories/interfaces/UserRepoInterface";
import bcrypt from 'bcrypt'
import jwt, { JwtPayload, VerifyCallback, VerifyErrors } from "jsonwebtoken";
import handleError from '../util/handleError'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string || 'secret'
const ACCESS_EXPIRES_IN = '60s'
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string || 'secret'
const REFRESH_EXPIRES_IN = '1d'

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
      if (!updatedUser) throw new Error('user refresh token update failed')

      const { password: pwd, refreshToken: rToken, createdAt, updatedAt, ...rest } = updatedUser

      const data = {
        user: {
          ...rest,
          createdAt: createdAt.toString(),
          updatedAt: updatedAt.toString()
        },
        token: accessToken,
        refreshToken: refreshToken
      }
      return { err: null, data }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async login(email: string, password: string) {
    const foundUser = await this.userRepo.findByEmail(email)
    if (!foundUser) return null

    await bcrypt.compare(password, foundUser.password)
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
    const { password: pwd, refreshToken: rToken, createdAt, updatedAt, ...rest } = foundUser
    const data = {
      user: {
        ...rest,
        createdAt: createdAt.toString(),
        updatedAt: updatedAt.toString()
      },
      token: accessToken,
      refreshToken: refreshToken
    }
    return data
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
    try {
      const user = await this.userRepo.findByToken(refreshToken)
      if (!user) return { err: 404, data: null }

      let data: any
      const verifyCallback: VerifyCallback = (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
        if (err || !decoded || typeof decoded === 'string' || user.email !== decoded.username) {
          return { err: 403, data: null }
        }

        const accessToken = jwt.sign(
          { username: decoded.username },
          ACCESS_TOKEN_SECRET,
          { expiresIn: REFRESH_EXPIRES_IN }
        )
        console.log(accessToken)
        const { refreshToken: rToken, password, ...rest } = user
        data = { err: null, data: { accessToken, user: rest } }
      }

      jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SECRET,
        verifyCallback
      )
      return data
    } catch (error) {
      console.log(error)
      return { err: 500, data: null }
    }


  }

}