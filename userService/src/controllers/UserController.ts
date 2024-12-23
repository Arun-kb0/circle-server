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
import { IUser } from "../model/UserModel";
import handleError from "../util/handeError";


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
      if (!res) {
        const code = grpc.status.NOT_FOUND
        const message = 'res is empty.'
        throw new CustomError(code, message, 'cnt')
      }
      if (res.err) {
        const code = grpc.status.INTERNAL
        const message = `error ${res.err}.`
        throw new CustomError(code, message, 'cnt')
      }

      // * convert every created and updatedAt to string
      let users: any[] = []
      res.data?.forEach((user) => {
        const data = {
          ...user,
          createdAt: user.createdAt.toString(),
          updatedAt: user.updatedAt.toString()
        }
        users.push(data)
      })

      cb(null, users as GetAllUsersResponse)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getUser: GetUserFun = async (call, cb) => {
    try {
      const { userId } = call.request
      if (!userId) {
        const code = grpc.status.INVALID_ARGUMENT
        const msg = 'userId is required'
        throw new CustomError(code, msg, 'cnt')
      }
      const res = await this.userService.getUser(userId)
      if (!res) {
        const code = grpc.status.NOT_FOUND
        const message = 'res is empty.'
        throw new CustomError(code, message, 'cnt')
      }
      if (res.err) {
        const code = grpc.status.INTERNAL
        const message = `error ${res.err}.`
        throw new CustomError(code, message, 'cnt')
      }
      if (!res.data) {
        const code = grpc.status.NOT_FOUND
        const message = `user not found.`
        throw new CustomError(code, message, 'cnt')
      }

      const { createdAt,image, updatedAt, password, refreshToken, ...rest } = res.data
      const user = {
        ...rest,
        createdAt: createdAt.toString(),
        updatedAt: createdAt.toString(),
      }

      cb(null, user as GetUserResponse); 

    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }



}