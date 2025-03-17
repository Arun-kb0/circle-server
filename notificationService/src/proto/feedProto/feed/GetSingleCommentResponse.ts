// Original file: src/proto/feed.proto

import type { Comment as _feed_Comment, Comment__Output as _feed_Comment__Output } from '../feed/Comment';

export interface GetSingleCommentResponse {
  'comment'?: (_feed_Comment | null);
}

export interface GetSingleCommentResponse__Output {
  'comment'?: (_feed_Comment__Output);
}
