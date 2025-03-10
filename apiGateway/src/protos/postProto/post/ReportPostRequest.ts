// Original file: src/proto/post.proto

import type { _post_ReportEnums_ContentType, _post_ReportEnums_ContentType__Output } from '../post/ReportEnums';

export interface ReportPostRequest {
  'contentId'?: (string);
  'userId'?: (string);
  'contentType'?: (_post_ReportEnums_ContentType);
}

export interface ReportPostRequest__Output {
  'contentId'?: (string);
  'userId'?: (string);
  'contentType'?: (_post_ReportEnums_ContentType__Output);
}
