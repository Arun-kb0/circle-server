// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';
import type { Like as _feed_Like, Like__Output as _feed_Like__Output } from '../feed/Like';
import type { User as _feed_User, User__Output as _feed_User__Output } from '../feed/User';

export interface SearchPostResponse {
  'posts'?: (_feed_Post)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like)[];
  'users'?: (_feed_User)[];
}

export interface SearchPostResponse__Output {
  'posts'?: (_feed_Post__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like__Output)[];
  'users'?: (_feed_User__Output)[];
}
