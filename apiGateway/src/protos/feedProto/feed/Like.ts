// Original file: src/proto/feed.proto

import type { _feed_CommentEnums_ContentType, _feed_CommentEnums_ContentType__Output } from '../feed/CommentEnums';

export interface Like {
  '_id'?: (string);
  'authorId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_CommentEnums_ContentType);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}

export interface Like__Output {
  '_id'?: (string);
  'authorId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_CommentEnums_ContentType__Output);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}
