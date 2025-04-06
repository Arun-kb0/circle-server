import IUser from '../interfaces/IUser'
import IUserRepo from '../interfaces/IUserRepo'
import handleError from '../util/handeError'
import IUserService from '../interfaces/IUserService'
import httpStatus from '../constants/httpStatus'
import { FuncReturnType, PaginationBlockedUsers } from '../constants/svcTypes'
import { UsersCountType } from '../constants/types'
import IBlockUser, { IBlockUserExt } from '../interfaces/IBlockUser'

const LIMIT = 5

export class UserService implements IUserService {

  constructor(
    private userRepo: IUserRepo,
  ) { }

  async getBlockedUsersByBlockerId(page: number, blockerUserId: string): FuncReturnType<PaginationBlockedUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.userRepo.getBlockedUsersByBlockerIdCount(blockerUserId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const blockedUsers = await this.userRepo.getBlockedUsersByBlockerId(blockerUserId, LIMIT, startIndex)
      const blockedUserIds = blockedUsers.map((user) => user.blockedUserId)
      const users = await this.userRepo.getMultipleUsers(blockedUserIds)
      const usersWithDetails = blockedUsers.map((blockedUser) => {
        const user = users.find((user) => user._id === blockedUser.blockedUserId)
        return {
          ...blockedUser,
          blockedUserName: user?.name,
          blockedUserImage: user?.image?.url
        } as IBlockUserExt
      })
      const response = {
        blockedUsers: usersWithDetails,
        numberOfPages,
        currentPage: page + 1
      }
      return { err: null, data: response }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getBlockedUserByBlockerAndBlockedId(blockerUserId: string, blockedUserId: string): FuncReturnType<IBlockUserExt | null> {
    try {
      const blockedUser = await this.userRepo.getBlockedUserByBlockerAndBlockedId(blockerUserId, blockedUserId)
      if(!blockedUser) return { err: null, data: null }
      const user = await this.userRepo.findById(blockedUser.blockedUserId)
      const blockedUserWithDetails: IBlockUserExt = {
        ...blockedUser,
        blockedUserName: user?.name as string,
        blockedUserImage: user?.image?.url
      }
      return { err: null, data: blockedUserWithDetails }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async createBlockedUser(blockedUserId: string, blockerUserId: string): FuncReturnType<IBlockUserExt | null> {
    try {
      const newBlockedUser = await this.userRepo.createBlockedUser(blockedUserId, blockerUserId)
      if (!newBlockedUser) return { err: httpStatus.BAD_REQUEST, errMsg: 'User already blocked', data: null }
      const user = await this.userRepo.findById(newBlockedUser.blockedUserId)
      const blockedUserWithDetails: IBlockUserExt = {
        ...newBlockedUser,
        blockedUserName: user?.name as string,
        blockedUserImage: user?.image?.url
      }
      return { err: null, data: blockedUserWithDetails }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async deleteBlockedUser(blockedUserId: string, blockerUserId: string): FuncReturnType<IBlockUserExt | null> {
    try {
      const deletedBlockedUser = await this.userRepo.deleteBlockedUser(blockedUserId, blockerUserId)
      if (!deletedBlockedUser) return { err: httpStatus.BAD_REQUEST, errMsg: 'User not blocked', data: null }
      const user = await this.userRepo.findById(deletedBlockedUser.blockedUserId)
      const blockedUserWithDetails: IBlockUserExt = {
        ...deletedBlockedUser,
        blockedUserName: user?.name as string,
        blockedUserImage: user?.image?.url
      }
      return { err: null, data: blockedUserWithDetails }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

  async getUserCountByDateDetails(startDate: string, endDate: string): FuncReturnType<{ date: string; count: number }[]> {
    try {
      const userCount = await this.userRepo.getUserCountByDateDetails(startDate, endDate)
      return { err: null, data: userCount }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, data: null }
    }
  }

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