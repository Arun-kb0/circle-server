// Original file: src/proto/feed.proto

import type { Comment as _feed_Comment, Comment__Output as _feed_Comment__Output } from '../feed/Comment';
import type { Like as _feed_Like, Like__Output as _feed_Like__Output } from '../feed/Like';

export interface GetCommentChildrenResponse {
  'comments'?: (_feed_Comment)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like)[];
}

export interface GetCommentChildrenResponse__Output {
  'comments'?: (_feed_Comment__Output)[];
  'currentPage'?: (number);
  'numberOfPages'?: (number);
  'likes'?: (_feed_Like__Output)[];
}
