// Original file: src/proto/user.proto

import type { BlockedUser as _user_BlockedUser, BlockedUser__Output as _user_BlockedUser__Output } from '../user/BlockedUser';

export interface GetBlockedUserByBlockerAndBlockedIdResponse {
  'blockedUser'?: (_user_BlockedUser | null);
}

export interface GetBlockedUserByBlockerAndBlockedIdResponse__Output {
  'blockedUser'?: (_user_BlockedUser__Output);
}
