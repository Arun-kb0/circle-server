// Original file: src/proto/feed.proto

import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';

export interface GetUserSavedPostsResponse {
  'savedPosts'?: (_feed_Post)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetUserSavedPostsResponse__Output {
  'savedPosts'?: (_feed_Post__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
