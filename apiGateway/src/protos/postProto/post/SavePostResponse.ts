// Original file: src/proto/post.proto

import type { Saved as _post_Saved, Saved__Output as _post_Saved__Output } from '../post/Saved';
import type { Post as _post_Post, Post__Output as _post_Post__Output } from '../post/Post';

export interface SavePostResponse {
  'savedData'?: (_post_Saved | null);
  'savedPost'?: (_post_Post | null);
}

export interface SavePostResponse__Output {
  'savedData'?: (_post_Saved__Output);
  'savedPost'?: (_post_Post__Output);
}
