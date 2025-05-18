import httpStatus from '../constants/httpStatus';
import { FuncReturnType, PaginationUsers } from '../constants/svcTypes';
import { QueueNotificationDataType } from '../constants/types';
import IFollowRepo from '../interfaces/IFollowRepo';
import IFollowService from '../interfaces/IFollowService'
import IUser from '../interfaces/IUser';
import handleError from '../util/handeError';
import { publishMessage } from '../util/rabbitmq'

const LIMIT = 20

class FollowService implements IFollowService {

  constructor(
    private followRepo: IFollowRepo,
    private QUEUE_NAME: string
  ) { }

  async getFollowers(userId: string, page: number): FuncReturnType<PaginationUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.followRepo.getFollowersCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const users = await this.followRepo.getFollowers(userId, LIMIT, startIndex)
      return { err: null, data: { users, numberOfPages, currentPage: page } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getFollowing(userId: string, page: number): FuncReturnType<PaginationUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.followRepo.getFollowingCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const users = await this.followRepo.getFollowing(userId, LIMIT, startIndex)
      return { err: null, data: { users, numberOfPages, currentPage: page } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getSuggestedPeople(userId: string, page: number): FuncReturnType<PaginationUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      let total = 0
      const mutualUsersCount = await this.followRepo.findMutualConnectionCount(userId)
      if (mutualUsersCount === 0) total = await this.followRepo.GetSuggestedPeopleCount(userId)
      total = mutualUsersCount
      const numberOfPages = Math.ceil(total / LIMIT)
      let users: IUser[] = []
      if (mutualUsersCount === 0) {
        users = await this.followRepo.GetSuggestedPeople(userId, LIMIT, startIndex)
      } else {
        users = await this.followRepo.findMutualConnectionUsersByUserId(userId, LIMIT, startIndex)
      }
      return { err: null, data: { users, numberOfPages, currentPage: page } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async followUser(userId: string, targetId: string): FuncReturnType<IUser> {
    try {
      const isExits = await this.followRepo.isFollowing(userId, targetId)
      if (isExits) return { err: httpStatus.CONFLICT, errMsg: 'already following.', data: null }
      const user = await this.followRepo.followUser(userId, targetId)
      if (!user) throw new Error('follow user failed')
      const notificationData: QueueNotificationDataType = {
        _id: '',
        authorId: userId,
        receiverId: targetId,
        type: 'follow',
        message: 'user following',
        read: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: {}
      }
      publishMessage(this.QUEUE_NAME, JSON.stringify(notificationData))
      return { err: null, data: user }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async unFollowUser(userId: string, targetId: string): FuncReturnType<IUser> {
    try {
      const isExits = await this.followRepo.isFollowing(userId, targetId)
      if (!isExits) return { err: httpStatus.CONFLICT, errMsg: 'not following.', data: null }
      const user = await this.followRepo.unFollowUser(userId, targetId)
      return { err: null, data: user }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

}

export default FollowService