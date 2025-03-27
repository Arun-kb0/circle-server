// Original file: src/proto/feed.proto

import type { Status as _feed_Status, Status__Output as _feed_Status__Output } from '../feed/Status';
import type { Role as _feed_Role, Role__Output as _feed_Role__Output } from '../feed/Role';
import type { Image as _feed_Image, Image__Output as _feed_Image__Output } from '../feed/Image';

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
  'status'?: (_feed_Status);
  'role'?: (_feed_Role);
  'isOnline'?: (boolean);
  'image'?: (_feed_Image | null);
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
  'status'?: (_feed_Status__Output);
  'role'?: (_feed_Role__Output);
  'isOnline'?: (boolean);
  'image'?: (_feed_Image__Output);
}
