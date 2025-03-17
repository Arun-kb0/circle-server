// Original file: src/proto/feed.proto

import type { Report as _feed_Report, Report__Output as _feed_Report__Output } from '../feed/Report';

export interface GetAllReportsResponse {
  'reports'?: (_feed_Report)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetAllReportsResponse__Output {
  'reports'?: (_feed_Report__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
