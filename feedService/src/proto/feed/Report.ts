// Original file: src/proto/feed.proto

import type { _feed_ReportEnums_ContentType, _feed_ReportEnums_ContentType__Output } from '../feed/ReportEnums';

export interface Report {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_ReportEnums_ContentType);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Report__Output {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_feed_ReportEnums_ContentType__Output);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
