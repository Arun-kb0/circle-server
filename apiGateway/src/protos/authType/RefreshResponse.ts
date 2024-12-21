// Original file: src/proto/auth.proto

import type { User as _authType_User, User__Output as _authType_User__Output } from '../authType/User';

export interface RefreshResponse {
  'accessToken'?: (string);
  'user'?: (_authType_User | null);
}

export interface RefreshResponse__Output {
  'accessToken'?: (string);
  'user'?: (_authType_User__Output);
}
