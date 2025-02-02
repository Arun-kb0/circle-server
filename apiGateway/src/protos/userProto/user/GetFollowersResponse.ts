// Original file: src/proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface GetFollowersResponse {
  'users'?: (_user_User)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetFollowersResponse__Output {
  'users'?: (_user_User__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
