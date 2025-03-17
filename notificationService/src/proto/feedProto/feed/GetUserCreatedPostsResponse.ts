// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';
import type { Like as _feed_Like, Like__Output as _feed_Like__Output } from '../feed/Like';

export interface GetUserCreatedPostsResponse {
  'posts'?: (_feed_Post)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like)[];
}

export interface GetUserCreatedPostsResponse__Output {
  'posts'?: (_feed_Post__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like__Output)[];
}
