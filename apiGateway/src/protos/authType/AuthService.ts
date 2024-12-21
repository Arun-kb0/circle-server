// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AdminLoginRequest as _authType_AdminLoginRequest, AdminLoginRequest__Output as _authType_AdminLoginRequest__Output } from '../authType/AdminLoginRequest';
import type { AdminLoginResponse as _authType_AdminLoginResponse, AdminLoginResponse__Output as _authType_AdminLoginResponse__Output } from '../authType/AdminLoginResponse';
import type { AdminSignUpRequest as _authType_AdminSignUpRequest, AdminSignUpRequest__Output as _authType_AdminSignUpRequest__Output } from '../authType/AdminSignUpRequest';
import type { AdminSignUpResponse as _authType_AdminSignUpResponse, AdminSignUpResponse__Output as _authType_AdminSignUpResponse__Output } from '../authType/AdminSignUpResponse';
import type { LoginRequest as _authType_LoginRequest, LoginRequest__Output as _authType_LoginRequest__Output } from '../authType/LoginRequest';
import type { LoginResponse as _authType_LoginResponse, LoginResponse__Output as _authType_LoginResponse__Output } from '../authType/LoginResponse';
import type { LogoutRequest as _authType_LogoutRequest, LogoutRequest__Output as _authType_LogoutRequest__Output } from '../authType/LogoutRequest';
import type { LogoutResponse as _authType_LogoutResponse, LogoutResponse__Output as _authType_LogoutResponse__Output } from '../authType/LogoutResponse';
import type { RefreshRequest as _authType_RefreshRequest, RefreshRequest__Output as _authType_RefreshRequest__Output } from '../authType/RefreshRequest';
import type { RefreshResponse as _authType_RefreshResponse, RefreshResponse__Output as _authType_RefreshResponse__Output } from '../authType/RefreshResponse';
import type { SignUpRequest as _authType_SignUpRequest, SignUpRequest__Output as _authType_SignUpRequest__Output } from '../authType/SignUpRequest';
import type { SignUpResponse as _authType_SignUpResponse, SignUpResponse__Output as _authType_SignUpResponse__Output } from '../authType/SignUpResponse';

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
  
  SignUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _authType_SignUpRequest, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _authType_SignUpRequest, callback: grpc.requestCallback<_authType_SignUpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  AdminLogin: grpc.handleUnaryCall<_authType_AdminLoginRequest__Output, _authType_AdminLoginResponse>;
  
  AdminSignUp: grpc.handleUnaryCall<_authType_AdminSignUpRequest__Output, _authType_AdminSignUpResponse>;
  
  Login: grpc.handleUnaryCall<_authType_LoginRequest__Output, _authType_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_authType_LogoutRequest__Output, _authType_LogoutResponse>;
  
  Refresh: grpc.handleUnaryCall<_authType_RefreshRequest__Output, _authType_RefreshResponse>;
  
  SignUp: grpc.handleUnaryCall<_authType_SignUpRequest__Output, _authType_SignUpResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  AdminLogin: MethodDefinition<_authType_AdminLoginRequest, _authType_AdminLoginResponse, _authType_AdminLoginRequest__Output, _authType_AdminLoginResponse__Output>
  AdminSignUp: MethodDefinition<_authType_AdminSignUpRequest, _authType_AdminSignUpResponse, _authType_AdminSignUpRequest__Output, _authType_AdminSignUpResponse__Output>
  Login: MethodDefinition<_authType_LoginRequest, _authType_LoginResponse, _authType_LoginRequest__Output, _authType_LoginResponse__Output>
  Logout: MethodDefinition<_authType_LogoutRequest, _authType_LogoutResponse, _authType_LogoutRequest__Output, _authType_LogoutResponse__Output>
  Refresh: MethodDefinition<_authType_RefreshRequest, _authType_RefreshResponse, _authType_RefreshRequest__Output, _authType_RefreshResponse__Output>
  SignUp: MethodDefinition<_authType_SignUpRequest, _authType_SignUpResponse, _authType_SignUpRequest__Output, _authType_SignUpResponse__Output>
}
