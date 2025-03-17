// Original file: src/proto/post.proto

import type { _post_ReportEnums_ContentType, _post_ReportEnums_ContentType__Output } from '../post/ReportEnums';

export interface Report {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_post_ReportEnums_ContentType);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Report__Output {
  '_id'?: (string);
  'userId'?: (string);
  'contentId'?: (string);
  'contentType'?: (_post_ReportEnums_ContentType__Output);
  'description'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
