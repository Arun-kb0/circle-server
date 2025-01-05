// Original file: src/proto/post.proto

import type { _post_CommentEnums_Media, _post_CommentEnums_Media__Output } from '../post/CommentEnums';
import type { Status as _post_Status, Status__Output as _post_Status__Output } from '../post/Status';

export interface Comment {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_post_CommentEnums_Media);
  'likeCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_post_Status);
  'contentId'?: (string);
  'contentType'?: (string);
  'createAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
}

export interface Comment__Output {
  '_id'?: (string);
  'media'?: (string);
  'mediaType'?: (_post_CommentEnums_Media__Output);
  'likeCount'?: (number);
  'replayCount'?: (number);
  'parentId'?: (string);
  'status'?: (_post_Status__Output);
  'contentId'?: (string);
  'contentType'?: (string);
  'createAt'?: (string);
  'updatedAt'?: (string);
  'authorId'?: (string);
}
