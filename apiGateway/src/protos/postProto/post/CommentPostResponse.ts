// Original file: src/proto/post.proto

import type { Comment as _post_Comment, Comment__Output as _post_Comment__Output } from '../post/Comment';

export interface CommentPostResponse {
  'comment'?: (_post_Comment | null);
  'postAuthorId'?: (string);
  'postId'?: (string);
}

export interface CommentPostResponse__Output {
  'comment'?: (_post_Comment__Output);
  'postAuthorId'?: (string);
  'postId'?: (string);
}
