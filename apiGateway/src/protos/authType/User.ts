// Original file: src/proto/auth.proto

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
  'blocked'?: (string);
  'deleted'?: (string);
  'active'?: (string);
  'admin'?: (string);
  'user'?: (string);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image | null);
  'status'?: "blocked"|"deleted"|"active";
  'role'?: "admin"|"user";
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
  'blocked'?: (string);
  'deleted'?: (string);
  'active'?: (string);
  'admin'?: (string);
  'user'?: (string);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image__Output);
}
