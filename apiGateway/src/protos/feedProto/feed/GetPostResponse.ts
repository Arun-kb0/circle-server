// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';

export interface GetPostResponse {
  'post'?: (_feed_Post | null);
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}

export interface GetPostResponse__Output {
  'post'?: (_feed_Post__Output);
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}
