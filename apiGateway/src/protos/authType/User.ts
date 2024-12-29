// Original file: src/proto/auth.proto

import type { Status as _authType_Status, Status__Output as _authType_Status__Output } from '../authType/Status';
import type { Role as _authType_Role, Role__Output as _authType_Role__Output } from '../authType/Role';
import type { Image as _authType_Image, Image__Output as _authType_Image__Output } from '../authType/Image';

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
  'status'?: (_authType_Status);
  'isVerified'?: (boolean);
  'role'?: (_authType_Role);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image | null);
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
  'status'?: (_authType_Status__Output);
  'isVerified'?: (boolean);
  'role'?: (_authType_Role__Output);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image__Output);
}
