import httpStatus from '../constants/httpStatus';
import { FuncReturnType, PaginationUsers } from '../constants/svcTypes';
import IFollowRepo from '../interfaces/IFollowRepo';
import IFollowService from '../interfaces/IFollowService'
import { IUser } from '../model/UserModel';
import handleError from '../util/handeError';

const LIMIT = 10

class FollowService implements IFollowService {

  constructor(
    private followRepo: IFollowRepo
  ) { }

  async getFollowers(userId: string, page: number): FuncReturnType<PaginationUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.followRepo.getFollowersCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const users = await this.followRepo.getFollowers(userId, LIMIT, startIndex)
      console.log(users)
      return { err: null, data: { users, numberOfPages, currentPage: page } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getSuggestedPeople(userId: string, page: number): FuncReturnType<PaginationUsers> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.followRepo.GetSuggestedPeopleCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const users = await this.followRepo.GetSuggestedPeople(userId, LIMIT, startIndex)
      return { err: null, data: { users, numberOfPages, currentPage: page } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async followUser(userId: string, targetId: string): FuncReturnType<IUser> {
    try {
      const isExits = await this.followRepo.isFollowing(userId, targetId, 'follower')
      if (isExits) return { err: httpStatus.CONFLICT, errMsg: 'already following.', data: null }
      const user = await this.followRepo.followUser(userId, targetId)
      return { err: null, data: user }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }
  
  async unFollowUser(userId: string, targetId: string): FuncReturnType<IUser> {
    try {
      const isExits = await this.followRepo.isFollowing(userId, targetId, 'follower')
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