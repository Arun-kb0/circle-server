// Original file: src/proto/post.proto

import type { Comment as _post_Comment, Comment__Output as _post_Comment__Output } from '../post/Comment';

export interface CreateCommentRequest {
  'comment'?: (_post_Comment | null);
  'contentType'?: (string);
  'contentId'?: (string);
}

export interface CreateCommentRequest__Output {
  'comment'?: (_post_Comment__Output);
  'contentType'?: (string);
  'contentId'?: (string);
}
