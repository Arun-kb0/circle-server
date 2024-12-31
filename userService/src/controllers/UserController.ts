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
import { User, User__Output } from '../proto/user/User'
import { convertUserForDb, convertUserForGrpc } from '../util/converter'
import { validateRequest, validateResponse } from '../util/validations'
import { IUser } from "../model/UserModel";
import IUserController from '../interfaces/IUserController'
import IUserService from "../interfaces/IUserService";


type GetAllUserHandler = grpc.handleUnaryCall<GetAllUsersRequest__Output, GetAllUsersResponse>;
type GetUserHandler = grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
type BlockUserHandler = grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
type UnblockUserHandler = grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
type UpdateUserHandler = grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;


export class UserController implements IUserController {

  constructor(
    private userService: IUserService
  ) { }


  getAllUsers: GetAllUserHandler = async (call, cb) => {
    type ResDataType = {
      users: IUser[],
      numberOfPages: number
      currentPage: number
    }
    try {
      const { page } = call.request
      validateRequest('page is required', page)
      const res = await this.userService.getAllUsers(page as number)
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
      const protoUser = convertUserForDb(user as User__Output)
      const res = await this.userService.updateUser(userId as string, protoUser)
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