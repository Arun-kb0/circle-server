// Original file: src/proto/post.proto

import type { _post_CommentEnums_ContentType, _post_CommentEnums_ContentType__Output } from '../post/CommentEnums';

export interface Like {
  '_id'?: (string);
  'authorId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}

export interface Like__Output {
  '_id'?: (string);
  'authorId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType__Output);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
}
