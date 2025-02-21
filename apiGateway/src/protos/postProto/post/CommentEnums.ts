// Original file: src/proto/post.proto


// Original file: src/proto/post.proto

export const _post_CommentEnums_ContentType = {
  post: 0,
  story: 1,
  comment: 2,
} as const;

export type _post_CommentEnums_ContentType =
  | 'post'
  | 0
  | 'story'
  | 1
  | 'comment'
  | 2

export type _post_CommentEnums_ContentType__Output = typeof _post_CommentEnums_ContentType[keyof typeof _post_CommentEnums_ContentType]

// Original file: src/proto/post.proto

export const _post_CommentEnums_Media = {
  text: 0,
  gif: 1,
} as const;

export type _post_CommentEnums_Media =
  | 'text'
  | 0
  | 'gif'
  | 1

export type _post_CommentEnums_Media__Output = typeof _post_CommentEnums_Media[keyof typeof _post_CommentEnums_Media]

export interface CommentEnums {
}

export interface CommentEnums__Output {
}
