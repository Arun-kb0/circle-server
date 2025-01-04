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
import { AdminSignUpRequest__Output } from "../proto/authType/AdminSignUpRequest";
import { AdminSignUpResponse } from "../proto/authType/AdminSignUpResponse";
import { AdminLoginRequest__Output } from "../proto/authType/AdminLoginRequest";
import { AdminLoginResponse } from "../proto/authType/AdminLoginResponse";
import IUserController from '../interfaces/IUserController'
import IUserService, { UserAuthInfo } from "../interfaces/IUserService";
import { ResendOtpRequest__Output } from "../proto/authType/ResendOtpRequest";
import { ResendOtpResponse } from "../proto/authType/ResendOtpResponse";
import { VerifyEmailRequest__Output } from "../proto/authType/VerifyEmailRequest";
import { VerifyEmailResponse } from "../proto/authType/VerifyEmailResponse";
import { ResetPasswordRequest__Output } from "../proto/authType/ResetPasswordRequest";
import { ResetPasswordResponse } from "../proto/authType/ResetPasswordResponse";
import { ResetPwdVerifyOtpRequest__Output } from "../proto/authType/ResetPwdVerifyOtpRequest";
import { ResetPwdVerifyOtpResponse } from "../proto/authType/ResetPwdVerifyOtpResponse";
import { GoogleOauthRequest__Output } from "../proto/authType/GoogleOauthRequest";
import { GoogleOauthResponse } from "../proto/authType/GoogleOauthResponse";
import httpStatus from "../constants/httpStatus";



type LoginUserHandler = grpc.handleUnaryCall<LoginRequest__Output, LoginResponse>
type SignupUserHandler = grpc.handleUnaryCall<SignUpRequest__Output, SignUpResponse>
type LogoutUserHandler = grpc.handleUnaryCall<LogoutRequest__Output, LogoutResponse>
type RefreshUserHandler = grpc.handleUnaryCall<RefreshRequest__Output, RefreshResponse>
type AdminLoginHandler = grpc.handleUnaryCall<AdminLoginRequest__Output, AdminLoginResponse>
type AdminSignupHandler = grpc.handleUnaryCall<AdminSignUpRequest__Output, AdminSignUpResponse>
type ResendOtpHandler = grpc.handleUnaryCall<ResendOtpRequest__Output, ResendOtpResponse>
type VerifyEmailHandler = grpc.handleUnaryCall<VerifyEmailRequest__Output, VerifyEmailResponse>;
type ResetPasswordHandler = grpc.handleUnaryCall<ResetPasswordRequest__Output, ResetPasswordResponse>;
type ResetPwdVerifyOtpHandler = grpc.handleUnaryCall<ResetPwdVerifyOtpRequest__Output, ResetPwdVerifyOtpResponse>;
type GoogleOauthHandler = grpc.handleUnaryCall<GoogleOauthRequest__Output, GoogleOauthResponse>;

export class UserController implements IUserController {

  constructor(
    private userService: IUserService
  ) { }

  googleOauth: GoogleOauthHandler = async (call, cb) => {
    type Data = {
      user: IUser,
      accessToken: string,
      refreshToken: string
    }
    try {
      const { token } = call.request
      validateRequest('token is required.', token)
      const res = await this.userService.googleOauthLogin(token as string)
      if (res?.err === httpStatus.CONFLICT) throw new CustomError(grpc.status.ABORTED, 'email already exits', 'cnt')
      validateResponse(res)
      const { user: rawUser, accessToken, refreshToken } = res.data as Data
      const user = convertUserForGrpc(rawUser)
      const response = {
        user,
        accessToken,
        refreshToken
      }
      cb(null, response)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  resetPassword: ResetPasswordHandler = async (call, cb) => {
    try {
      const { email, password } = call.request
      validateRequest('email and password are required', email, password)
      const res = await this.userService.resetPassword(email as string, password as string)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  resetPwdVerifyOtp: ResetPwdVerifyOtpHandler = async (call, cb) => {
    try {
      const { email, otp, otpId } = call.request
      validateRequest('email , otp and otpId are required.', email, otp, otpId)
      const res = await this.userService.resetPwdVerifyOtp(email as string, otp as number, otpId as string)
      if (res?.err === 404 || res?.err === 408) throw new CustomError(grpc.status.UNAVAILABLE, res.errMsg as string, 'cnt')
      if (res?.err === 410) throw new CustomError(grpc.status.ABORTED, res.errMsg as string, 'cnt')
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  signup: SignupUserHandler = async (call, cb) => {
    try {
      const { name, email, password } = call.request
      const message = 'name, email and password is required.'
      validateRequest(message, name, email, password)
      const res = await this.userService.signup(name as string, email as string, password as string)
      if (res?.err === httpStatus.CONFLICT) throw new CustomError(grpc.status.ABORTED, 'email already exits', 'cnt')
      validateResponse(res)
      cb(null, res.data)

    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  resendOtp: ResendOtpHandler = async (call, cb) => {
    try {
      const { email, otpId, isPassword } = call.request
      validateRequest('email is required.', email)
      const res = await this.userService.resendOtp(email as string, otpId as string, isPassword)
      if (res?.err === 404) throw new CustomError(grpc.status.NOT_FOUND, res.errMsg as string, 'cnt')
      validateResponse(res)
      const response = {
        status: res.data ? 'success' : 'failed',
        email: res.data?.email,
        otpId: res.data?._id
      }
      cb(null, response)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  verifyEmail: VerifyEmailHandler = async (call, cb) => {
    type Data = {
      user: IUser,
      accessToken: string,
      refreshToken: string
    }
    try {
      const { email, otp, otpId } = call.request
      validateRequest('email and otp is required', email, otp)
      const res = await this.userService.verifyOtp(email as string, otp as number, otpId as string)
      if (res?.err === 404 || res?.err === 408) throw new CustomError(grpc.status.UNAVAILABLE, res.errMsg as string, 'cnt')
      if (res?.err === 410) throw new CustomError(grpc.status.ABORTED, res.errMsg as string, 'cnt')
      validateResponse(res)
      const { user: rawUser, ...rest } = res.data as Data
      const user = convertUserForGrpc(rawUser)
      const response = { user, ...rest }
      console.log(response)
      cb(null, response)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  login: LoginUserHandler = async (call, cb) => {
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
      console.log(res)
      if (res.err === 401) {
        const code = grpc.status.INVALID_ARGUMENT
        const message = 'email or password mis match'
        throw new CustomError(code, message, 'cnt')
      }
      if (res.err === 409) {
        const code = grpc.status.UNAVAILABLE
        const message = 'account blocked'
        throw new CustomError(code, message, 'cnt')
      }
      if (res.err === 410 || res.err === httpStatus.NOT_FOUND) {
        const code = grpc.status.NOT_FOUND
        const message = 'user not found'
        throw new CustomError(code, message, 'cnt')
      }
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

  logout: LogoutUserHandler = async (call, cb) => {
    try {
      const { token } = call.request
      validateRequest('token is required ', token)
      const res = await this.userService.logout(token as string)
      if (res.err === 404) {
        const code = grpc.status.NOT_FOUND
        const message = `user not found`
        throw new CustomError(code, message, 'cnt')
      }
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  refresh: RefreshUserHandler = async (call, cb) => {
    type DataType = {
      user: IUser;
      accessToken: string
    }
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
      const { user: rawUser, accessToken } = res.data as DataType
      const user = convertUserForGrpc(rawUser)
      const response = {
        user,
        accessToken
      }
      cb(null, response)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }

  }

  adminSignup: AdminSignupHandler = async (call, cb) => {
    type Data = {
      user: IUser;
      token: string;
      refreshToken: string;
    }
    try {
      const { name, email, password } = call.request
      const message = 'name, email and password is required.'
      validateRequest(message, name, email, password)
      const res = await this.userService.adminSignup(name as string, email as string, password as string)
      if (res.err === 404) {
        const code = grpc.status.PERMISSION_DENIED
        const message = `error ${res.err}.`
        throw new CustomError(code, message, 'cnt')
      }
      validateResponse(res)
      const { user: rawUser, ...rest } = res.data as Data
      const user = convertUserForGrpc(rawUser)
      const response = {
        user,
        ...rest,
      }
      cb(null, response)

    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  adminLogin: AdminLoginHandler = async (call, cb) => {
    type Data = {
      user: IUser;
      token: string;
      refreshToken: string;
    }
    try {
      const { email, password } = call.request
      const message = 'email and password is required.'
      validateRequest(message, email, password)
      const res = await this.userService.adminLogin(email as string, password as string)
      if (res.err === 401) {
        const code = grpc.status.INVALID_ARGUMENT
        const message = 'email or password mis match'
        throw new CustomError(code, message, 'cnt')
      }
      if (res.err === 404) {
        const code = grpc.status.NOT_FOUND
        const message = 'root user or user not found '
        throw new CustomError(code, message, 'cnt')
      }
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

}