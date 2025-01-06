// Original file: src/proto/post.proto

import type { Comment as _post_Comment, Comment__Output as _post_Comment__Output } from '../post/Comment';

export interface CreateCommentResponse {
  'comment'?: (_post_Comment | null);
}

export interface CreateCommentResponse__Output {
  'comment'?: (_post_Comment__Output);
}
