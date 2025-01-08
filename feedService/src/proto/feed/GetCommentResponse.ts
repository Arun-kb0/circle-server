// Original file: src/proto/feed.proto

import type { Comment as _feed_Comment, Comment__Output as _feed_Comment__Output } from '../feed/Comment';

export interface GetCommentResponse {
  'comments'?: (_feed_Comment)[];
}

export interface GetCommentResponse__Output {
  'comments'?: (_feed_Comment__Output)[];
}
