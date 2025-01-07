// Original file: src/proto/post.proto

import type { _post_CommentEnums_ContentType, _post_CommentEnums_ContentType__Output } from '../post/CommentEnums';

export interface LikeRequest {
  'authorId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType);
  'contentId'?: (string);
}

export interface LikeRequest__Output {
  'authorId'?: (string);
  'contentType'?: (_post_CommentEnums_ContentType__Output);
  'contentId'?: (string);
}
