import httpStatus from '../constants/httpStatus';
import { PaginationUsers } from '../constants/svcTypes';
import IFollowController, {
  FollowUserHandler, GetFollowersHandler,
  GetSuggestedPeopleHandler, UnFollowUserHandler
} from '../interfaces/IFollowController'
import IFollowService from '../interfaces/IFollowService';
import { IUser } from '../model/UserModel';
import { convertUserForGrpc } from '../util/converter';
import { CustomError } from '../util/CustomError';
import handleError from '../util/handeError';
import { validateRequest, validateResponse } from '../util/validations';
import * as grpc from '@grpc/grpc-js'

class FollowController implements IFollowController {

  constructor(
    private followService: IFollowService
  ) { }

  getFollowers: GetFollowersHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('page and userId is required.', page, userId)
      const res = await this.followService.getFollowers(userId as string, page as number)
      validateResponse(res)
      const { users: rawUsers, ...rest } = res.data as PaginationUsers
      const users = rawUsers.map(user => convertUserForGrpc(user))
      cb(null, { users, ...rest })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getSuggestedPeople: GetSuggestedPeopleHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('page and userId is required.', page, userId)
      const res = await this.followService.getSuggestedPeople(userId as string, page as number)
      validateResponse(res)
      const { users: rawUsers, ...rest } = res.data as PaginationUsers
      const users = rawUsers.map(user => convertUserForGrpc(user))
      cb(null, { users, ...rest })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  followUser: FollowUserHandler = async (call, cb) => {
    try {
      const { userId, targetId } = call.request
      validateRequest('userId and targetId are required', userId, targetId)
      const res = await this.followService.followUser(userId as string, targetId as string)
      validateResponse(res)
      if (res.err === httpStatus.CONFLICT) throw new CustomError(grpc.status.ABORTED, res.errMsg as string, 'cnt')
      const rawUser = res.data as IUser
      const user = convertUserForGrpc(rawUser)
      cb(null, { user })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  unFollowUser: UnFollowUserHandler = async (call, cb) => {
    try {
      const { userId, targetId } = call.request
      validateRequest('userId and targetId are required', userId, targetId)
      const res = await this.followService.unFollowUser(userId as string, targetId as string)
      if (res.err === httpStatus.CONFLICT) throw new CustomError(grpc.status.ABORTED, res.errMsg as string, 'cnt')
      validateResponse(res)
      const rawUser = res.data as IUser
      const user = convertUserForGrpc(rawUser)
      cb(null, { user })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

}

export default FollowController