// Original file: src/proto/feed.proto


// Original file: src/proto/feed.proto

export const _feed_CommentEnums_ContentType = {
  post: 0,
  story: 1,
  comment: 2,
} as const;

export type _feed_CommentEnums_ContentType =
  | 'post'
  | 0
  | 'story'
  | 1
  | 'comment'
  | 2

export type _feed_CommentEnums_ContentType__Output = typeof _feed_CommentEnums_ContentType[keyof typeof _feed_CommentEnums_ContentType]

// Original file: src/proto/feed.proto

export const _feed_CommentEnums_Media = {
  text: 0,
  gif: 1,
} as const;

export type _feed_CommentEnums_Media =
  | 'text'
  | 0
  | 'gif'
  | 1

export type _feed_CommentEnums_Media__Output = typeof _feed_CommentEnums_Media[keyof typeof _feed_CommentEnums_Media]

export interface CommentEnums {
}

export interface CommentEnums__Output {
}
