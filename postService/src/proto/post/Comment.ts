// Original file: src/proto/post.proto

import type { _post_CommentEnums_Media, _post_CommentEnums_Media__Output } from '../post/CommentEnums';
import type { Status as _post_Status, Status__Output as _post_Status__Output } from '../post/Status';
import type { _post_CommentEnums_ContentType, _post_CommentEnums_ContentType__Output } from '../post/CommentEnums';

export interface Comment {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_post_CommentEnums_Media);
  'likesCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_post_Status);
  'contentId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}

export interface Comment__Output {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_post_CommentEnums_Media__Output);
  'likesCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_post_Status__Output);
  'contentId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}
