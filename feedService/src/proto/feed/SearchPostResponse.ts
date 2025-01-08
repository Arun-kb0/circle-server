// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';

export interface SearchPostResponse {
  'post'?: (_feed_Post)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}

export interface SearchPostResponse__Output {
  'post'?: (_feed_Post__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}
