// Original file: src/proto/feed.proto

import type { Comment as _feed_Comment, Comment__Output as _feed_Comment__Output } from '../feed/Comment';

export interface GetCommentResponse {
  'comments'?: (_feed_Comment)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}

export interface GetCommentResponse__Output {
  'comments'?: (_feed_Comment__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
}
