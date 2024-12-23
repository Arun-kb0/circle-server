// Original file: src/proto/auth.proto

import type { Image as _authType_Image, Image__Output as _authType_Image__Output } from '../authType/Image';

export interface User {
  '_id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (number);
  'state'?: (number);
  'gender'?: (number);
  'role'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (string);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image | null);
}

export interface User__Output {
  '_id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (number);
  'state'?: (number);
  'gender'?: (number);
  'role'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (string);
  'isOnline'?: (boolean);
  'image'?: (_authType_Image__Output);
}
