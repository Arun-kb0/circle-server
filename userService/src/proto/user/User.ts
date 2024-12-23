// Original file: src/proto/user.proto

import type { Image as _user_Image, Image__Output as _user_Image__Output } from '../user/Image';

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
  'image'?: (_user_Image | null);
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
  'image'?: (_user_Image__Output);
}
