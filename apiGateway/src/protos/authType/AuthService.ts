// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AdminLoginRequest as _authType_AdminLoginRequest, AdminLoginRequest__Output as _authType_AdminLoginRequest__Output } from './AdminLoginRequest';
import type { AdminLoginResponse as _authType_AdminLoginResponse, AdminLoginResponse__Output as _authType_AdminLoginResponse__Output } from './AdminLoginResponse';
import type { AdminSignUpRequest as _authType_AdminSignUpRequest, AdminSignUpRequest__Output as _authType_AdminSignUpRequest__Output } from './AdminSignUpRequest';
import type { AdminSignUpResponse as _authType_AdminSignUpResponse, AdminSignUpResponse__Output as _authType_AdminSignUpResponse__Output } from './AdminSignUpResponse';
import type { LoginRequest as _authType_LoginRequest, LoginRequest__Output as _authType_LoginRequest__Output } from './LoginRequest';
import type { LoginResponse as _authType_LoginResponse, LoginResponse__Output as _authType_LoginResponse__Output } from './LoginResponse';
import type { LogoutRequest as _authType_LogoutRequest, LogoutRequest__Output as _authType_LogoutRequest__Output } from './LogoutRequest';
import type { LogoutResponse as _authType_LogoutResponse, LogoutResponse__Output as _authType_LogoutResponse__Output } from './LogoutResponse';
import type { SignUpRequest as _authType_SignUpRequest, SignUpRequest__Output as _authType_SignUpRequest__Output } from './SignUpRequest';
import type { SignUpResponse as _authType_SignUpResponse, SignUpResponse__Output as _authType_SignUpResponse__Output } from './SignUpResponse';

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
  
  SignUp: grpc.handleUnaryCall<_authType_SignUpRequest__Output, _authType_SignUpResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  AdminLogin: MethodDefinition<_authType_AdminLoginRequest, _authType_AdminLoginResponse, _authType_AdminLoginRequest__Output, _authType_AdminLoginResponse__Output>
  AdminSignUp: MethodDefinition<_authType_AdminSignUpRequest, _authType_AdminSignUpResponse, _authType_AdminSignUpRequest__Output, _authType_AdminSignUpResponse__Output>
  Login: MethodDefinition<_authType_LoginRequest, _authType_LoginResponse, _authType_LoginRequest__Output, _authType_LoginResponse__Output>
  Logout: MethodDefinition<_authType_LogoutRequest, _authType_LogoutResponse, _authType_LogoutRequest__Output, _authType_LogoutResponse__Output>
  SignUp: MethodDefinition<_authType_SignUpRequest, _authType_SignUpResponse, _authType_SignUpRequest__Output, _authType_SignUpResponse__Output>
}
