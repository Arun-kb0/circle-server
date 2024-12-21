import { UserRepoInterface } from "../repositories/interfaces/UserRepoInterface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { IUser } from "../model/UserModel";

export class UserService {

  constructor(
    private userRepo: UserRepoInterface
  ) { }

  async signup(name: string, email: string, password: string) {
    const hashedPwd = await bcrypt.hash(password, 10)
    const user = {
      name,
      email,
      password: hashedPwd,
    }
    const newUser = await this.userRepo.create({ ...user, role: 'user' })

    const accessToken = jwt.sign(
      { "username": newUser.email },
      process.env.ACCESS_TOKEN_SECRET as string || 'secret',
      { expiresIn: '60s' }
    )
    const refreshToken = jwt.sign(
      { "username": newUser.email },
      process.env.REFRESH_TOKEN_SECRET as string || 'secret',
      { expiresIn: '1d' }
    )

    const updatedUser = await this.userRepo.update(newUser._id, { refreshToken })
    if (!updatedUser) throw new Error('user refresh token update failed')

    const { password: pwd, refreshToken: rToken, createdAt, updatedAt, ...rest } = updatedUser
    console.log("updatedUser")
    console.log(updatedUser)
    console.log("rest")
    console.log(rest)
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
  }

  async login(email: string, password: string) {
    const foundUser = await this.userRepo.findByEmail(email)
    if (!foundUser) return null

    await bcrypt.compare(password, foundUser.password)
    const accessToken = jwt.sign(
      { "username": foundUser.email },
      process.env.ACCESS_TOKEN_SECRET as string || 'secret',
      { expiresIn: '60s' }
    )
    const refreshToken = jwt.sign(
      { "username": foundUser.email },
      process.env.REFRESH_TOKEN_SECRET as string || 'secret',
      { expiresIn: '1d' }
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

  async logout(id: string, token: string) {
    this.userRepo.update(id, { refreshToken: undefined })
  }

  async getUserByEmail(email: string) {
    return this.userRepo.findByEmail(email)
  }

}