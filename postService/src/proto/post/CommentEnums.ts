// Original file: src/proto/post.proto


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
