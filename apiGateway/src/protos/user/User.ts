// Original file: src/proto/user.proto

import type { Status as _user_Status, Status__Output as _user_Status__Output } from '../user/Status';
import type { Role as _user_Role, Role__Output as _user_Role__Output } from '../user/Role';
import type { Image as _user_Image, Image__Output as _user_Image__Output } from '../user/Image';

export interface User {
  '_id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (string);
  'state'?: (string);
  'gender'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_user_Status);
  'role'?: (_user_Role);
  'isOnline'?: (boolean);
  'image'?: (_user_Image | null);
}

export interface User__Output {
  '_id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (string);
  'state'?: (string);
  'gender'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_user_Status__Output);
  'role'?: (_user_Role__Output);
  'isOnline'?: (boolean);
  'image'?: (_user_Image__Output);
}
