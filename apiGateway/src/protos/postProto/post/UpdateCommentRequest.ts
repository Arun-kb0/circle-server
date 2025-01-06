// Original file: src/proto/post.proto

import type { Comment as _post_Comment, Comment__Output as _post_Comment__Output } from '../post/Comment';

export interface UpdateCommentRequest {
  'comment'?: (_post_Comment | null);
  'commentId'?: (string);
}

export interface UpdateCommentRequest__Output {
  'comment'?: (_post_Comment__Output);
  'commentId'?: (string);
}
