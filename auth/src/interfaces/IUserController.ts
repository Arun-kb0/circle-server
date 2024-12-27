import * as grpc from '@grpc/grpc-js';
import { LoginRequest__Output } from '../proto/authType/LoginRequest'
import { SignUpRequest__Output } from '../proto/authType/SignUpRequest'
import { LoginResponse } from '../proto/authType/LoginResponse'
import { SignUpResponse } from "../proto/authType/SignUpResponse";
import { LogoutRequest__Output } from "../proto/authType/LogoutRequest";
import { LogoutResponse } from "../proto/authType/LogoutResponse";
import { RefreshRequest__Output } from "../proto/authType/RefreshRequest";
import { RefreshResponse } from "../proto/authType/RefreshResponse";
import { JwtVerifyRequest__Output } from "../proto/authType/JwtVerifyRequest";
import { JwtVerifyResponse } from "../proto/authType/JwtVerifyResponse";
import { AdminSignUpRequest__Output } from "../proto/authType/AdminSignUpRequest";
import { AdminSignUpResponse } from "../proto/authType/AdminSignUpResponse";
import { AdminLoginRequest__Output } from "../proto/authType/AdminLoginRequest";
import { AdminLoginResponse } from "../proto/authType/AdminLoginResponse";



interface IUserController {
  signup: grpc.handleUnaryCall<LoginRequest__Output, LoginResponse>
  login: grpc.handleUnaryCall<SignUpRequest__Output, SignUpResponse>
  logout: grpc.handleUnaryCall<LogoutRequest__Output, LogoutResponse>
  refresh: grpc.handleUnaryCall<RefreshRequest__Output, RefreshResponse>
  jwtVerify: grpc.handleUnaryCall<JwtVerifyRequest__Output, JwtVerifyResponse>
  adminLogin: grpc.handleUnaryCall<AdminLoginRequest__Output, AdminLoginResponse>
  adminSignup: grpc.handleUnaryCall<AdminSignUpRequest__Output, AdminSignUpResponse>
}

export default IUserController