// Original file: src/proto/post.proto

import type { Post as _post_Post, Post__Output as _post_Post__Output } from '../post/Post';

export interface UpdatePostRequest {
  'post'?: (_post_Post | null);
  'postId'?: (string);
}

export interface UpdatePostRequest__Output {
  'post'?: (_post_Post__Output);
  'postId'?: (string);
}
