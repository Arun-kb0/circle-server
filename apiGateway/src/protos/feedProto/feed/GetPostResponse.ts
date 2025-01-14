// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';
import type { Like as _feed_Like, Like__Output as _feed_Like__Output } from '../feed/Like';

export interface GetPostResponse {
  'post'?: (_feed_Post | null);
  'like'?: (_feed_Like | null);
}

export interface GetPostResponse__Output {
  'post'?: (_feed_Post__Output);
  'like'?: (_feed_Like__Output);
}
