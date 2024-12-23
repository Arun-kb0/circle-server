import { UserService } from "../services/UserService";
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


type GetAllUserFun = grpc.handleUnaryCall<GetAllUsersRequest__Output, GetAllUsersResponse>;
type GetUserFun = grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
type BlockUserFun = grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
type UnblockUserFun = grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
type UpdateUserFun = grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;

export class UserController {

  constructor(
    private userService: UserService
  ) { }

  getAllUsers: GetAllUserFun = async (call, cb) => {
    try {
      const res = await this.userService.getAllUsers()
      validateResponse(res)
      const users: User[] = []
      res.data?.forEach((user) => {
        const data = convertUserForGrpc(user)
        users.push(data)
      })
      cb(null, { users: users })

    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getUser: GetUserFun = async (call, cb) => {
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

  updateUser: UpdateUserFun = async (call, cb) => {
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
  blockUser: BlockUserFun = async (call, cb) => {
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

  unblockUser: UnblockUserFun = async (call, cb) => {
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



}