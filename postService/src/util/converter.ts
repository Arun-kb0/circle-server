import { Schema } from "mongoose"
import IPost from "../interfaces/IPost"
import { Post } from "../proto/post/Post"


export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertPostForGrpc = (post: Partial<IPost>) => {
  const {
    _id, desc, tags, mediaType, media,
    authorId, status, likesCount, reportsCount,
    commentCount, shareCount, updatedAt, createdAt
  } = post
  const convertedPost: Post = {
    _id, desc, tags, mediaType, media,
    authorId, status, likesCount, reportsCount,
    commentCount, shareCount,
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedPost
}

export const convertPostForDb = (post: Post): Partial<IPost> => {
  const { createdAt, updatedAt, mediaType, status, _id, ...rest } = post
  const convertedPost: Partial<IPost> = {
    ...rest,
    mediaType: mediaType as 'image' | 'video' | 'text',
    status: status as 'active' | 'deleted' | 'blocked',
    // createdAt: stringToDate(createdAt as string),
    // updatedAt: stringToDate(updatedAt as string)
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedPost
}
