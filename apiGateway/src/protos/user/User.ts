// Original file: src/proto/user.proto

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
  'blocked'?: (string);
  'deleted'?: (string);
  'active'?: (string);
  'admin'?: (string);
  'user'?: (string);
  'isOnline'?: (boolean);
  'image'?: (_user_Image | null);
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
  'image'?: (_user_Image__Output);
}
