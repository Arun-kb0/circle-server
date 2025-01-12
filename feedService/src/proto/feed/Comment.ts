// Original file: src/proto/feed.proto

import type { _feed_CommentEnums_Media, _feed_CommentEnums_Media__Output } from '../feed/CommentEnums';
import type { Status as _feed_Status, Status__Output as _feed_Status__Output } from '../feed/Status';
import type { _feed_CommentEnums_ContentType, _feed_CommentEnums_ContentType__Output } from '../feed/CommentEnums';

export interface Comment {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_feed_CommentEnums_Media);
  'likesCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_feed_Status);
  'contentId'?: (string);
  'contentType'?: (_feed_CommentEnums_ContentType);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}

export interface Comment__Output {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_feed_CommentEnums_Media__Output);
  'likesCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_feed_Status__Output);
  'contentId'?: (string);
  'contentType'?: (_feed_CommentEnums_ContentType__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}
