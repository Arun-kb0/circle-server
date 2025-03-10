// Original file: src/proto/post.proto


// Original file: src/proto/post.proto

export const _post_ReportEnums_ContentType = {
  post: 0,
  story: 1,
  user: 2,
  comment: 3,
} as const;

export type _post_ReportEnums_ContentType =
  | 'post'
  | 0
  | 'story'
  | 1
  | 'user'
  | 2
  | 'comment'
  | 3

export type _post_ReportEnums_ContentType__Output = typeof _post_ReportEnums_ContentType[keyof typeof _post_ReportEnums_ContentType]

export interface ReportEnums {
}

export interface ReportEnums__Output {
}
