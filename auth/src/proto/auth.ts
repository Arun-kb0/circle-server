import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _authType_AuthServiceClient, AuthServiceDefinition as _authType_AuthServiceDefinition } from './authType/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authType: {
    AdminLoginRequest: MessageTypeDefinition
    AdminLoginResponse: MessageTypeDefinition
    AdminSignUpRequest: MessageTypeDefinition
    AdminSignUpResponse: MessageTypeDefinition
    AuthService: SubtypeConstructor<typeof grpc.Client, _authType_AuthServiceClient> & { service: _authType_AuthServiceDefinition }
    ForgotPasswordRequest: MessageTypeDefinition
    ForgotPasswordResponse: MessageTypeDefinition
    GoogleOauthRequest: MessageTypeDefinition
    GoogleOauthResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    LogoutRequest: MessageTypeDefinition
    LogoutResponse: MessageTypeDefinition
    RefreshRequest: MessageTypeDefinition
    RefreshResponse: MessageTypeDefinition
    ResendOtpRequest: MessageTypeDefinition
    ResendOtpResponse: MessageTypeDefinition
    ResetPasswordRequest: MessageTypeDefinition
    ResetPasswordResponse: MessageTypeDefinition
    ResetPwdVerifyOtpRequest: MessageTypeDefinition
    ResetPwdVerifyOtpResponse: MessageTypeDefinition
    Role: EnumTypeDefinition
    SignUpRequest: MessageTypeDefinition
    SignUpResponse: MessageTypeDefinition
    Status: EnumTypeDefinition
    User: MessageTypeDefinition
    VerifyEmailRequest: MessageTypeDefinition
    VerifyEmailResponse: MessageTypeDefinition
  }
}

