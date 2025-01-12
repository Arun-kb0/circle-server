// Original file: src/proto/feed.proto

import type { Media as _feed_Media, Media__Output as _feed_Media__Output } from '../feed/Media';
import type { Status as _feed_Status, Status__Output as _feed_Status__Output } from '../feed/Status';

export interface Post {
  '_id'?: (string);
  'desc'?: (string);
  'mediaType'?: (_feed_Media);
  'media'?: (string)[];
  'authorId'?: (string);
  'status'?: (_feed_Status);
  'likesCount'?: (number);
  'reportsCount'?: (number);
  'commentCount'?: (number);
  'shareCount'?: (number);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'tags'?: (string)[];
  'authorName'?: (string);
  'authorImage'?: (string);
}

export interface Post__Output {
  '_id'?: (string);
  'desc'?: (string);
  'mediaType'?: (_feed_Media__Output);
  'media'?: (string)[];
  'authorId'?: (string);
  'status'?: (_feed_Status__Output);
  'likesCount'?: (number);
  'reportsCount'?: (number);
  'commentCount'?: (number);
  'shareCount'?: (number);
  'updatedAt'?: (string);
  'createdAt'?: (string);
  'tags'?: (string)[];
  'authorName'?: (string);
  'authorImage'?: (string);
}
