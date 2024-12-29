// Original file: src/proto/auth.proto

import type { User as _authType_User, User__Output as _authType_User__Output } from '../authType/User';

export interface VerifyEmailResponse {
  'user'?: (_authType_User | null);
  'accessToken'?: (string);
  'refreshToken'?: (string);
}

export interface VerifyEmailResponse__Output {
  'user'?: (_authType_User__Output);
  'accessToken'?: (string);
  'refreshToken'?: (string);
}
