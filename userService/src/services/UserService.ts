import IUser from '../interfaces/IUser'
import IUserRepo from '../interfaces/IUserRepo'
import handleError from '../util/handeError'
import IUserService from '../interfaces/IUserService'
import httpStatus from '../constants/httpStatus'
import { FuncReturnType } from '../constants/svcTypes'
import { UsersCountType } from '../constants/types'

const LIMIT = 5

export class UserService implements IUserService {

  constructor(
    private userRepo: IUserRepo,
  ) { }

  async countUsers(startDate?: string, endDate?: string): FuncReturnType<UsersCountType> {
    try {
      const userCount = await this.userRepo.countUsers(startDate, endDate)
      return { err: null, data: userCount }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async getMultipleUsers(userIds: string[]) {
    try {
      const user = await this.userRepo.getMultipleUsers(userIds)
      return { err: null, data: user }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async getAllUsers(page: number, startDate?: string, endDate?: string, searchText = '') {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.userRepo.countDocs()
      const numberOfPages = Math.ceil(total / LIMIT)
      const users = await this.userRepo.findAll(LIMIT, startIndex, startDate, endDate, searchText)
      const response = {
        users: users,
        numberOfPages,
        currentPage: page
      }
      return { err: null, data: response }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async getUser(userId: string) {
    try {
      const user = await this.userRepo.findById(userId)
      return { err: null, data: user }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async updateUser(userId: string, user: Partial<IUser>) {
    try {
      const updatedUser = await this.userRepo.update(userId, user)
      if (!updatedUser) return { err: httpStatus.NOT_FOUND, data: null }
      return { err: null, data: updatedUser }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  // * admin functions
  async blockUser(userId: string) {
    try {
      const blockedUser = await this.userRepo.update(userId, { status: 'blocked' })
      if (!blockedUser) return { err: httpStatus.NOT_FOUND, data: null }
      return { err: null, data: blockedUser }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async unBlockUser(userId: string) {
    try {
      const blockedUser = await this.userRepo.update(userId, { status: 'active' })
      if (!blockedUser) return { err: httpStatus.NOT_FOUND, data: null }
      return { err: null, data: blockedUser }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }



}