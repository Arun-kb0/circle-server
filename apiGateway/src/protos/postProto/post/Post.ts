// Original file: src/proto/post.proto

import type { Media as _post_Media, Media__Output as _post_Media__Output } from '../post/Media';
import type { Status as _post_Status, Status__Output as _post_Status__Output } from '../post/Status';

export interface Post {
  '_id'?: (string);
  'desc'?: (string);
  'mediaType'?: (_post_Media);
  'media'?: (string)[];
  'authorId'?: (string);
  'status'?: (_post_Status);
  'likesCount'?: (number);
  'reportsCount'?: (number);
  'commentCount'?: (number);
  'shareCount'?: (number);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'tags'?: (string)[];
}

export interface Post__Output {
  '_id'?: (string);
  'desc'?: (string);
  'mediaType'?: (_post_Media__Output);
  'media'?: (string)[];
  'authorId'?: (string);
  'status'?: (_post_Status__Output);
  'likesCount'?: (number);
  'reportsCount'?: (number);
  'commentCount'?: (number);
  'shareCount'?: (number);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'tags'?: (string)[];
}
