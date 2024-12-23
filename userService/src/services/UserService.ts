import { IUser } from '../model/UserModel'
import { UserRepoInterface } from '../repositories/interfaces/UserRepoInterface'
import { CustomError } from '../util/CustomError'
import handleError from '../util/handeError'

export class UserService {

  constructor(
    private userRepo: UserRepoInterface
  ) { }

  async getAllUsers() {
    try {
      const users = await this.userRepo.findAll()
      return { err: null, data: users }
    } catch (error) {
      console.log(error)
      return { err: 500, data: null }
    }
  }

  async getUser(userId: string) {
    try {
      const user = await this.userRepo.findById(userId)
      return { err: null, data: user }
    } catch (error) {
      const { code  , message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async updateUser(userId: string, user: Partial<IUser>) {
    try {
      const updatedUser = await this.userRepo.update(userId, user)
      if (!updatedUser) return { err: 404, data: null }
      return { err: null, data: updatedUser }
    } catch (error) {
      return { err: 500, data: null }
    }
  }

  // * admin functions
  async blockUser(userId: string) {
    try {
      const blockedUser = this.userRepo.update(userId, { status: 'blocked' })
      if (!blockedUser) return { err: 404, data: null }
      return { err: null, data: blockedUser }
    } catch (error) {
      return { err: 500, data: null }
    }
  }

  async unBlockUser(userId: string) {
    try {
      const blockedUser = this.userRepo.update(userId, { status: 'active' })
      if (!blockedUser) return { err: 404, data: null }
      return { err: null, data: blockedUser }
    } catch (error) {
      return { err: 500, data: null }
    }
  }



}