// Original file: src/proto/feed.proto


// Original file: src/proto/feed.proto

export const _feed_ReportEnums_ContentType = {
  post: 0,
  story: 1,
  user: 2,
  comment: 3,
} as const;

export type _feed_ReportEnums_ContentType =
  | 'post'
  | 0
  | 'story'
  | 1
  | 'user'
  | 2
  | 'comment'
  | 3

export type _feed_ReportEnums_ContentType__Output = typeof _feed_ReportEnums_ContentType[keyof typeof _feed_ReportEnums_ContentType]

export interface ReportEnums {
}

export interface ReportEnums__Output {
}
