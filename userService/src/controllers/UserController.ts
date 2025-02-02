import * as grpc from '@grpc/grpc-js'
import { BlockUserRequest__Output } from "../proto/user/BlockUserRequest";
import { BlockUserResponse } from "../proto/user/BlockUserResponse";
import { GetAllUsersRequest__Output } from "../proto/user/GetAllUsersRequest";
import { GetAllUsersResponse } from "../proto/user/GetAllUsersResponse";
import { GetUserResponse } from "../proto/user/GetUserResponse";
import { GetUserRequest__Output } from "../proto/user/GetUserRequest";
import { UnblockUserRequest__Output } from "../proto/user/UnblockUserRequest";
import { UnblockUserResponse } from "../proto/user/UnblockUserResponse";
import { UpdateUserRequest__Output } from "../proto/user/UpdateUserRequest";
import { UpdateUserResponse } from "../proto/user/UpdateUserResponse";
import { CustomError } from "../util/CustomError";
import handleError from "../util/handeError";
import { User } from '../proto/user/User'
import { convertGrpcUserForUpdate, convertUserForGrpc } from '../util/converter'
import { validateRequest, validateResponse } from '../util/validations'
import IUser from "../interfaces/IUser";
import IUserController from '../interfaces/IUserController'
import IUserService from "../interfaces/IUserService";
import { GetMultipleUserRequest__Output } from '../proto/user/GetMultipleUserRequest';
import { GetMultipleUserResponse } from '../proto/user/GetMultipleUserResponse';


type GetAllUserHandler = grpc.handleUnaryCall<GetAllUsersRequest__Output, GetAllUsersResponse>;
type GetUserHandler = grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
type BlockUserHandler = grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
type UnblockUserHandler = grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
type UpdateUserHandler = grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;
type GetMultipleUsersHandler = grpc.handleUnaryCall<GetMultipleUserRequest__Output, GetMultipleUserResponse>;

export class UserController implements IUserController {

  constructor(
    private userService: IUserService
  ) { }

  getMultipleUsers: GetMultipleUsersHandler = async (call, cb) => {
    try {
      const { userIds } = call.request
      validateRequest('userId is required', userIds)
      const res = await this.userService.getMultipleUsers(userIds as string[])
      console.log('get multiple controller')
      console.log(res)
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