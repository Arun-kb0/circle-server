import { UserService } from "../services/UserService";
import * as grpc from '@grpc/grpc-js';
import { LoginRequest__Output } from '../proto/authType/LoginRequest'
import { LoginResponse } from '../proto/authType/LoginResponse'


type LoginUserFun = grpc.handleUnaryCall<LoginRequest__Output, LoginResponse>

export class UserController {

  constructor(
    private userService: UserService
  ) { }

  login: LoginUserFun = async (call, cb) => {
    try {
      const { email, password } = call.request
      if (!email || !password) {
        return cb({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'email and password is required.',
        }, null)
      }
      const data = await this.userService.login(email,password)

      if (!data) {
        return cb({
          code: grpc.status.NOT_FOUND,
          message: 'user not found.',
        }, null)
      }

    
      cb(null, data)
    } catch (error) {
      console.error(error)
      let message = 'unexpected error occurred.'
      if (error instanceof Error) {
        message = error.message
      }
      cb({
        code: grpc.status.INTERNAL,
        message,
      },null)
    }
  }

}