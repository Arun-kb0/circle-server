// Original file: src/proto/auth.proto

import type { User as _authType_User, User__Output as _authType_User__Output } from '../authType/User';

export interface AdminSignUpResponse {
  'user'?: (_authType_User | null);
  'token'?: (string);
  'refreshToken'?: (string);
}

export interface AdminSignUpResponse__Output {
  'user'?: (_authType_User__Output);
  'token'?: (string);
  'refreshToken'?: (string);
}
