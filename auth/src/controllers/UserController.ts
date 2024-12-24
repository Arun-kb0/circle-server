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
import { User } from "../proto/authType/User";
import { CustomError } from "../util/CustomError";
import handleError from "../util/handleError";
import { convertUserForGrpc } from "../util/converter";
import { validateRequest, validateResponse } from "../util/validations";
import { IUser } from "../model/UserModel";



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
      const message = 'name, email and password is required.'
      validateRequest(message, name, email, password)
      const res = await this.userService.signup(name as string, email as string, password as string)
      validateResponse(res)
      cb(null, res.data)

    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  login: LoginUserFun = async (call, cb) => {
    type Data = {
      user: IUser;
      token: string;
      refreshToken: string;
    }
    try {
      const { email, password } = call.request
      const message = 'email and password is required.'
      validateRequest(message, email, password)
      const res = await this.userService.login(email as string, password as string)
      validateResponse(res)

      const { user: rawUser, token, refreshToken } = res.data as Data
      const user = convertUserForGrpc(rawUser)
      const data = {
        user,
        token,
        refreshToken
      }
      cb(null, data)

    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  logout: LogoutUserFun = async (call, cb) => {
    try {
      const { token } = call.request
      validateRequest('token is required ', token)
      const res = await this.userService.logout(token as string)
      validateResponse(res)
      if (res.err === 404) {
        const code = grpc.status.NOT_FOUND
        const message = `user not found`
        throw new CustomError(code, message, 'cnt')
      }
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  refresh: RefreshUserFun = async (call, cb) => {
    try {
      const { refreshToken } = call.request
      const message = 'refreshToken is required.'
      validateRequest(message, refreshToken)
      const res = await this.userService.refresh(refreshToken as string)
      validateResponse(res)
      if (res.err === 403) {
        const code = grpc.status.UNAUTHENTICATED
        const message = 'refreshToken unauthorized.'
        throw new CustomError(code, message, 'cnt')
      }
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }

  }


}