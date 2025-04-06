// Original file: src/proto/user.proto

import type { BlockedUser as _user_BlockedUser, BlockedUser__Output as _user_BlockedUser__Output } from '../user/BlockedUser';

export interface GetBlockedUsersByBlockerIdResponse {
  'blockedUsers'?: (_user_BlockedUser)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}

export interface GetBlockedUsersByBlockerIdResponse__Output {
  'blockedUsers'?: (_user_BlockedUser__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}
