// Original file: src/proto/feed.proto

import type { _feed_ReportEnums_ContentType, _feed_ReportEnums_ContentType__Output } from '../feed/ReportEnums';
import type { Post as _feed_Post, Post__Output as _feed_Post__Output } from '../feed/Post';

export interface Report {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_ReportEnums_ContentType);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'userName'?: (string);
  'userImage'?: (string);
  'post'?: (_feed_Post | null);
}

export interface Report__Output {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_ReportEnums_ContentType__Output);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'userName'?: (string);
  'userImage'?: (string);
  'post'?: (_feed_Post__Output);
}
