// Original file: src/proto/feed.proto

export const Media = {
  image: 0,
  video: 1,
  text: 2,
} as const;

export type Media =
  | 'image'
  | 0
  | 'video'
  | 1
  | 'text'
  | 2

export type Media__Output = typeof Media[keyof typeof Media]
