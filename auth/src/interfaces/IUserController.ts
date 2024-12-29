import * as grpc from '@grpc/grpc-js';
import { LoginRequest__Output } from '../proto/authType/LoginRequest'
import { SignUpRequest__Output } from '../proto/authType/SignUpRequest'
import { LoginResponse } from '../proto/authType/LoginResponse'
import { SignUpResponse } from "../proto/authType/SignUpResponse";
import { LogoutRequest__Output } from "../proto/authType/LogoutRequest";
import { LogoutResponse } from "../proto/authType/LogoutResponse";
import { RefreshRequest__Output } from "../proto/authType/RefreshRequest";
import { RefreshResponse } from "../proto/authType/RefreshResponse";
import { AdminSignUpRequest__Output } from "../proto/authType/AdminSignUpRequest";
import { AdminSignUpResponse } from "../proto/authType/AdminSignUpResponse";
import { AdminLoginRequest__Output } from "../proto/authType/AdminLoginRequest";
import { AdminLoginResponse } from "../proto/authType/AdminLoginResponse";
import { ResendOtpRequest__Output } from '../proto/authType/ResendOtpRequest';
import { ResendOtpResponse } from '../proto/authType/ResendOtpResponse';
import { VerifyEmailRequest__Output } from '../proto/authType/VerifyEmailRequest';
import { VerifyEmailResponse } from '../proto/authType/VerifyEmailResponse';



interface IUserController {
  signup: grpc.handleUnaryCall<SignUpRequest__Output, SignUpResponse>
  login: grpc.handleUnaryCall<LoginRequest__Output, LoginResponse>
  logout: grpc.handleUnaryCall<LogoutRequest__Output, LogoutResponse>
  refresh: grpc.handleUnaryCall<RefreshRequest__Output, RefreshResponse>
  resendOtp: grpc.handleUnaryCall<ResendOtpRequest__Output, ResendOtpResponse>
  verifyEmail: grpc.handleUnaryCall<VerifyEmailRequest__Output,VerifyEmailResponse>

  adminLogin: grpc.handleUnaryCall<AdminLoginRequest__Output, AdminLoginResponse>
  adminSignup: grpc.handleUnaryCall<AdminSignUpRequest__Output, AdminSignUpResponse>
}

export default IUserController