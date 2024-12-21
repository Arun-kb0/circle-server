import { groupCollapsed } from "console";
import { IUser } from "../model/UserModel";
import { UserRepoInterface } from "../repositories/interfaces/UserRepoInterface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export class UserService {

  constructor(
    private userRepo: UserRepoInterface
  ) { }

  async login(email: string, password: string) {
    try {

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

      // ! update user with refresh token
      const updatedUser = await this.userRepo.update(foundUser._id, { refreshToken })

      const { password: pwd, refreshToken: rToken, createdAt, updatedAt,  ...rest } = foundUser
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
    } catch (error) {
      console.error(error)
    }
  }

  async getUserById(id: string) {
    return this.userRepo.findById(id)
  }

  async getUserByEmail(email: string) {
    return this.userRepo.findByEmail(email)
  }

}