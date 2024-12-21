import { UserService } from "../services/UserService";
import * as grpc from '@grpc/grpc-js';
import { LoginRequest__Output } from '../proto/authType/LoginRequest'
import { SignUpRequest__Output } from '../proto/authType/SignUpRequest'
import { LoginResponse } from '../proto/authType/LoginResponse'
import { SignUpResponse } from "../proto/authType/SignUpResponse";
import { LogoutRequest__Output } from "../proto/authType/LogoutRequest";
import { LogoutResponse } from "../proto/authType/LogoutResponse";
import { RefreshRequest__Output } from "../proto/authType/RefreshRequest";
import { RefreshResponse } from "../proto/authType/RefreshResponse";


type LoginUserFun = grpc.handleUnaryCall<LoginRequest__Output, LoginResponse>
type SignupUserFun = grpc.handleUnaryCall<SignUpRequest__Output, SignUpResponse>
type LogoutUserFun = grpc.handleUnaryCall<LogoutRequest__Output, LogoutResponse>
type RefreshUserFun = grpc.handleUnaryCall<RefreshRequest__Output, RefreshResponse>

export class UserController {

  constructor(
    private userService: UserService
  ) { }

  signup: SignupUserFun = async (call, cb) => {
    try {
      const { name, email, password } = call.request
      if (!email || !password || !name) {
        return cb({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'name, email and password is required.',
        }, null)
      }
      const res = await this.userService.signup(name, email, password)
      console.log(res)
      if (!res || res.err) {
        return cb({
          code: grpc.status.NOT_FOUND,
          message: 'user not found.',
        }, null)
      }

      cb(null, res.data)

    } catch (error) {
      console.error(error)
      let message = 'unexpected error occurred.'
      if (error instanceof Error) {
        message = error.message
      }
      cb({
        code: grpc.status.INTERNAL,
        message,
      }, null)
    }

  }

  login: LoginUserFun = async (call, cb) => {
    try {
      const { email, password } = call.request
      if (!email || !password) {
        return cb({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'email and password is required.',
        }, null)
      }
      const data = await this.userService.login(email, password)

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
      }, null)
    }
  }

  logout: LogoutUserFun = async (call, cb) => {
    try {
      const { userId, token } = call.request
      if (!userId || !token) {
        return cb({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'email and password is required.',
        }, null)
      }
      this.userService.logout(userId, token)
      cb(null, { status: 'success' })
    } catch (error) {
      console.error(error)
      let message = 'unexpected error occurred.'
      if (error instanceof Error) {
        message = error.message
      }
      cb({
        code: grpc.status.INTERNAL,
        message,
      }, null)
    }
  }

  refresh: RefreshUserFun = async (call, cb) => {
    try {
      const { refreshToken } = call.request
      if (!refreshToken) {
        return cb({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'refreshToken is required.',
        }, null)
      }
      const res = await this.userService.refresh(refreshToken)
      if (!res) {
        return cb({
          code: grpc.status.NOT_FOUND,
          message: 'res is empty.',
        }, null)
      } else if (res.err === 403) {
        return cb({
          code: grpc.status.UNAUTHENTICATED,
          message: 'unauthorized.',
        }, null)
      }
      cb(null, res.data)
    } catch (error) {
      console.error(error)
      let message = 'unexpected error occurred.'
      if (error instanceof Error) {
        message = error.message
      }
      cb({
        code: grpc.status.INTERNAL,
        message,
      }, null)
    }
  }


}