// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AdminLoginRequest as _authType_AdminLoginRequest, AdminLoginRequest__Output as _authType_AdminLoginRequest__Output } from '../authType/AdminLoginRequest';
import type { AdminLoginResponse as _authType_AdminLoginResponse, AdminLoginResponse__Output as _authType_AdminLoginResponse__Output } from '../authType/AdminLoginResponse';
import type { AdminSignUpRequest as _authType_AdminSignUpRequest, AdminSignUpRequest__Output as _authType_AdminSignUpRequest__Output } from '../authType/AdminSignUpRequest';
import type { AdminSignUpResponse as _authType_AdminSignUpResponse, AdminSignUpResponse__Output as _authType_AdminSignUpResponse__Output } from '../authType/AdminSignUpResponse';
import type { ForgotPasswordRequest as _authType_ForgotPasswordRequest, ForgotPasswordRequest__Output as _authType_ForgotPasswordRequest__Output } from '../authType/ForgotPasswordRequest';
import type { ForgotPasswordResponse as _authType_ForgotPasswordResponse, ForgotPasswordResponse__Output as _authType_ForgotPasswordResponse__Output } from '../authType/ForgotPasswordResponse';
import type { LoginRequest as _authType_LoginRequest, LoginRequest__Output as _authType_LoginRequest__Output } from '../authType/LoginRequest';
import type { LoginResponse as _authType_LoginResponse, LoginResponse__Output as _authType_LoginResponse__Output } from '../authType/LoginResponse';
import type { LogoutRequest as _authType_LogoutRequest, LogoutRequest__Output as _authType_LogoutRequest__Output } from '../authType/LogoutRequest';
import type { LogoutResponse as _authType_LogoutResponse, LogoutResponse__Output as _authType_LogoutResponse__Output } from '../authType/LogoutResponse';
import type { RefreshRequest as _authType_RefreshRequest, RefreshRequest__Output as _authType_RefreshRequest__Output } from '../authType/RefreshRequest';
import type { RefreshResponse as _authType_RefreshResponse, RefreshResponse__Output as _authType_RefreshResponse__Output } from '../authType/RefreshResponse';
import type { ResendOtpRequest as _authType_ResendOtpRequest, ResendOtpRequest__Output as _authType_ResendOtpRequest__Output } from '../authType/ResendOtpRequest';
import type { ResendOtpResponse as _authType_ResendOtpResponse, ResendOtpResponse__Output as _authType_ResendOtpResponse__Output } from '../authType/ResendOtpResponse';
import type { ResetPasswordRequest as _authType_ResetPasswordRequest, ResetPasswordRequest__Output as _authType_ResetPasswordRequest__Output } from '../authType/ResetPasswordRequest';
import type { ResetPasswordResponse as _authType_ResetPasswordResponse, ResetPasswordResponse__Output as _authType_ResetPasswordResponse__Output } from '../authType/ResetPasswordResponse';
import type { ResetPwdVerifyOtpRequest as _authType_ResetPwdVerifyOtpRequest, ResetPwdVerifyOtpRequest__Output as _authType_ResetPwdVerifyOtpRequest__Output } from '../authType/ResetPwdVerifyOtpRequest';
import type { ResetPwdVerifyOtpResponse as _authType_ResetPwdVerifyOtpResponse, ResetPwdVerifyOtpResponse__Output as _authType_ResetPwdVerifyOtpResponse__Output } from '../authType/ResetPwdVerifyOtpResponse';
import type { SignUpRequest as _authType_SignUpRequest, SignUpRequest__Output as _authType_SignUpRequest__Output } from '../authType/SignUpRequest';
import type { SignUpResponse as _authType_SignUpResponse, SignUpResponse__Output as _authType_SignUpResponse__Output } from '../authType/SignUpResponse';
import type { VerifyEmailRequest as _authType_VerifyEmailRequest, VerifyEmailRequest__Output as _authType_VerifyEmailRequest__Output } from '../authType/VerifyEmailRequest';
import type { VerifyEmailResponse as _authType_VerifyEmailResponse, VerifyEmailResponse__Output as _authType_VerifyEmailResponse__Output } from '../authType/VerifyEmailResponse';

export interface AuthServiceClient extends grpc.Client {
  AdminLogin(argument: _authType_AdminLoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  AdminLogin(argument: _authType_AdminLoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  AdminLogin(argument: _authType_AdminLoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  AdminLogin(argument: _authType_AdminLoginRequest, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _authType_AdminLoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _authType_AdminLoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _authType_AdminLoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  adminLogin(argument: _authType_AdminLoginRequest, callback: grpc.requestCallback<_authType_AdminLoginResponse__Output>): grpc.ClientUnaryCall;
  
  AdminSignUp(argument: _authType_AdminSignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  AdminSignUp(argument: _authType_AdminSignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  AdminSignUp(argument: _authType_AdminSignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  AdminSignUp(argument: _authType_AdminSignUpRequest, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  adminSignUp(argument: _authType_AdminSignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  adminSignUp(argument: _authType_AdminSignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  adminSignUp(argument: _authType_AdminSignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  adminSignUp(argument: _authType_AdminSignUpRequest, callback: grpc.requestCallback<_authType_AdminSignUpResponse__Output>): grpc.ClientUnaryCall;
  
  ForgotPassword(argument: _authType_ForgotPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _authType_ForgotPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _authType_ForgotPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _authType_ForgotPasswordRequest, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _authType_ForgotPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _authType_ForgotPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _authType_ForgotPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _authType_ForgotPasswordRequest, callback: grpc.requestCallback<_authType_ForgotPasswordResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _authType_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authType_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authType_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authType_LoginRequest, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authType_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authType_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authType_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authType_LoginRequest, callback: grpc.requestCallback<_authType_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _authType_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _authType_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _authType_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _authType_LogoutRequest, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _authType_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _authType_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _authType_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _authType_LogoutRequest, callback: grpc.requestCallback<_authType_LogoutResponse__Output>): grpc.ClientUnaryCall;
  
  Refresh(argument: _authType_RefreshRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _authType_RefreshRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _authType_RefreshRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _authType_RefreshRequest, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _authType_RefreshRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _authType_RefreshRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _authType_RefreshRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _authType_RefreshRequest, callback: grpc.requestCallback<_authType_RefreshResponse__Output>): grpc.ClientUnaryCall;
  
  ResendOtp(argument: _authType_ResendOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  ResendOtp(argument: _authType_ResendOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  ResendOtp(argument: _authType_ResendOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  ResendOtp(argument: _authType_ResendOtpRequest, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  resendOtp(argument: _authType_ResendOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  resendOtp(argument: _authType_ResendOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  resendOtp(argument: _authType_ResendOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  resendOtp(argument: _authType_ResendOtpRequest, callback: grpc.requestCallback<_authType_ResendOtpResponse__Output>): grpc.ClientUnaryCall;
  
  ResetPassword(argument: _authType_ResetPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _authType_ResetPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _authType_ResetPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _authType_ResetPasswordRequest, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _authType_ResetPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _authType_ResetPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _authType_ResetPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _authType_ResetPasswordRequest, callback: grpc.requestCallback<_authType_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  
  ResetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  ResetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  ResetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  ResetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  resetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  resetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  resetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  resetPwdVerifyOtp(argument: _authType_ResetPwdVerifyOtpRequest, callback: grpc.requestCallback<_authType_ResetPwdVerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  
  SignUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyEmail(argument: _authType_VerifyEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _authType_VerifyEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _authType_VerifyEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _authType_VerifyEmailRequest, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _authType_VerifyEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _authType_VerifyEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _authType_VerifyEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _authType_VerifyEmailRequest, callback: grpc.requestCallback<_authType_VerifyEmailResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  AdminLogin: grpc.handleUnaryCall<_authType_AdminLoginRequest__Output, _authType_AdminLoginResponse>;
  
  AdminSignUp: grpc.handleUnaryCall<_authType_AdminSignUpRequest__Output, _authType_AdminSignUpResponse>;
  
  ForgotPassword: grpc.handleUnaryCall<_authType_ForgotPasswordRequest__Output, _authType_ForgotPasswordResponse>;
  
  Login: grpc.handleUnaryCall<_authType_LoginRequest__Output, _authType_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_authType_LogoutRequest__Output, _authType_LogoutResponse>;
  
  Refresh: grpc.handleUnaryCall<_authType_RefreshRequest__Output, _authType_RefreshResponse>;
  
  ResendOtp: grpc.handleUnaryCall<_authType_ResendOtpRequest__Output, _authType_ResendOtpResponse>;
  
  ResetPassword: grpc.handleUnaryCall<_authType_ResetPasswordRequest__Output, _authType_ResetPasswordResponse>;
  
  ResetPwdVerifyOtp: grpc.handleUnaryCall<_authType_ResetPwdVerifyOtpRequest__Output, _authType_ResetPwdVerifyOtpResponse>;
  
  SignUp: grpc.handleUnaryCall<_authType_SignUpRequest__Output, _authType_SignUpResponse>;
  
  VerifyEmail: grpc.handleUnaryCall<_authType_VerifyEmailRequest__Output, _authType_VerifyEmailResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  AdminLogin: MethodDefinition<_authType_AdminLoginRequest, _authType_AdminLoginResponse, _authType_AdminLoginRequest__Output, _authType_AdminLoginResponse__Output>
  AdminSignUp: MethodDefinition<_authType_AdminSignUpRequest, _authType_AdminSignUpResponse, _authType_AdminSignUpRequest__Output, _authType_AdminSignUpResponse__Output>
  ForgotPassword: MethodDefinition<_authType_ForgotPasswordRequest, _authType_ForgotPasswordResponse, _authType_ForgotPasswordRequest__Output, _authType_ForgotPasswordResponse__Output>
  Login: MethodDefinition<_authType_LoginRequest, _authType_LoginResponse, _authType_LoginRequest__Output, _authType_LoginResponse__Output>
  Logout: MethodDefinition<_authType_LogoutRequest, _authType_LogoutResponse, _authType_LogoutRequest__Output, _authType_LogoutResponse__Output>
  Refresh: MethodDefinition<_authType_RefreshRequest, _authType_RefreshResponse, _authType_RefreshRequest__Output, _authType_RefreshResponse__Output>
  ResendOtp: MethodDefinition<_authType_ResendOtpRequest, _authType_ResendOtpResponse, _authType_ResendOtpRequest__Output, _authType_ResendOtpResponse__Output>
  ResetPassword: MethodDefinition<_authType_ResetPasswordRequest, _authType_ResetPasswordResponse, _authType_ResetPasswordRequest__Output, _authType_ResetPasswordResponse__Output>
  ResetPwdVerifyOtp: MethodDefinition<_authType_ResetPwdVerifyOtpRequest, _authType_ResetPwdVerifyOtpResponse, _authType_ResetPwdVerifyOtpRequest__Output, _authType_ResetPwdVerifyOtpResponse__Output>
  SignUp: MethodDefinition<_authType_SignUpRequest, _authType_SignUpResponse, _authType_SignUpRequest__Output, _authType_SignUpResponse__Output>
  VerifyEmail: MethodDefinition<_authType_VerifyEmailRequest, _authType_VerifyEmailResponse, _authType_VerifyEmailRequest__Output, _authType_VerifyEmailResponse__Output>
}
