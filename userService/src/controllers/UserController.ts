import * as grpc from '@grpc/grpc-js'
import { CustomError } from "../util/CustomError";
import handleError from "../util/handeError";
import { User } from '../proto/user/User'
import { convertUserForGrpc } from '../util/converter'
import { validateRequest, validateResponse } from '../util/validations'
import IUser from "../interfaces/IUser";
import IUserController, {
  BlockUserHandler, CountUsersHandler, CreateBlockedUserHandler,
  DeleteBlockedUserHandler, GetAllUserHandler,
  GetBlockedUserByBlockerAndBlockedIdHandler,
  GetBlockedUsersByBlockerIdHandler,
  GetMultipleUsersHandler, GetUserCountDetailsHandler,
  GetUserHandler, UnblockUserHandler, UpdateUserHandler
} from '../interfaces/IUserController'
import IUserService from "../interfaces/IUserService";


export class UserController implements IUserController {

  constructor(
    private userService: IUserService
  ) { }

  // * user to user blocking
  getBlockedUsersByBlockerId: GetBlockedUsersByBlockerIdHandler = async (call, cb) => {
    try {
      const { page, blockerUserId } = call.request
      validateRequest('page and blockerUserId are required', page, blockerUserId)
      const res = await this.userService.getBlockedUsersByBlockerId(page as number, blockerUserId as string)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getBlockedUserByBlockerAndBlockedId: GetBlockedUserByBlockerAndBlockedIdHandler = async (call, cb) => {
    try {
      const { blockedUserId, blockerUserId } = call.request
      validateRequest('blockedUserId and blockerUserId are required', blockedUserId, blockerUserId)
      const res = await this.userService.getBlockedUserByBlockerAndBlockedId(blockerUserId as string, blockedUserId as string)
      validateResponse(res)
      cb(null, { blockedUser: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createBlockedUser: CreateBlockedUserHandler = async (call, cb) => {
    try {
      const { blockedUserId, blockerUserId } = call.request
      validateRequest('blockedUserId and blockerUserId are required', blockedUserId, blockerUserId)
      const res = await this.userService.createBlockedUser(blockedUserId as string, blockerUserId as string,)
      validateResponse(res)
      cb(null, { blockedUser: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteBlockedUser: DeleteBlockedUserHandler = async (call, cb) => {
    try {
      const { blockedUserId, blockerUserId } = call.request
      validateRequest('blockedUserId and blockerUserId are required', blockedUserId, blockerUserId)
      const res = await this.userService.deleteBlockedUser(blockedUserId as string, blockerUserId as string)
      validateResponse(res)
      cb(null, { blockedUser: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }
  // * user to user blocking end


  getUserCountByDateDetails: GetUserCountDetailsHandler = async (call, cb) => {
    try {
      const { startDate, endDate } = call.request
      validateRequest('startDate and endDate is required', startDate, endDate)
      const res = await this.userService.getUserCountByDateDetails(startDate as string, endDate as string)
      validateResponse(res)
      cb(null, { userCountArray: res.data as { date: string; count: number; }[] })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  usersCount: CountUsersHandler = async (call, cb) => {
    try {
      const { startDate, endDate } = call.request
      const res = await this.userService.countUsers(startDate, endDate)
      validateResponse(res)
      cb(null, res?.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getMultipleUsers: GetMultipleUsersHandler = async (call, cb) => {
    try {
      const { userIds } = call.request
      validateRequest('userId is required', userIds)
      const res = await this.userService.getMultipleUsers(userIds as string[])
      validateResponse(res)
      const convertedUsers = res.data?.map((user) => convertUserForGrpc(user))
      cb(null, { users: convertedUsers });
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }


  getAllUsers: GetAllUserHandler = async (call, cb) => {
    type ResDataType = {
      users: IUser[],
      numberOfPages: number
      currentPage: number
    }
    try {
      const { page, startDate, endDate, searchText } = call.request
      validateRequest('page is required', page)
      const res = await this.userService.getAllUsers(page as number, startDate, endDate, searchText)
      if (res?.err === 404) throw new CustomError(grpc.status.INVALID_ARGUMENT, 'string to date conversion failed', 'cnt')
      validateResponse(res)
      const { users: rawUsers, numberOfPages, currentPage } = res.data as ResDataType
      const users: User[] = []
      rawUsers.forEach((user) => {
        const data = convertUserForGrpc(user)
        users.push(data)
      })
      const response = {
        users,
        numberOfPages,
        currentPage
      }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getUser: GetUserHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      console.warn("user controller getUser = ", call.request)
      validateRequest('userId is required', userId)
      const res = await this.userService.getUser(userId as string)
      validateResponse(res)
      const user = convertUserForGrpc(res.data as IUser)
      cb(null, { user });
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateUser: UpdateUserHandler = async (call, cb) => {
    try {
      const { userId, user } = call.request
      validateRequest('userId and password is required', userId, user)
      // const protoUser = convertGrpcUserForUpdate(user as User)
      const res = await this.userService.updateUser(userId as string, user as Partial<IUser>)
      validateResponse(res)
      const updatedUser = convertUserForGrpc(res.data as IUser)
      cb(null, { user: updatedUser })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }



  // * admin
  blockUser: BlockUserHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required', userId)
      const res = await this.userService.blockUser(userId as string)
      validateResponse(res)
      cb(null, { userId })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  unblockUser: UnblockUserHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required', userId)
      const res = await this.userService.unBlockUser(userId as string)
      validateResponse(res)
      cb(null, { userId })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }



}