// Original file: src/proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface GetAllUsersResponse {
  'users'?: (_user_User)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}

export interface GetAllUsersResponse__Output {
  'users'?: (_user_User__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}
