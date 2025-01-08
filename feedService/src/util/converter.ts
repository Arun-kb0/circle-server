import { Date, Schema } from "mongoose"
import IPost from "../interfaces/IPost"
import { Post } from "../proto/feed/Post"
import { Comment } from "../proto/feed/Comment"
import IComment from "../interfaces/IComment"
import { Like } from "../proto/feed/Like"
import ILike from '../interfaces/ILike'


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
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedPost
}


export const convertCommentForGrpc = (comment: IComment): Comment => {
  const {
    _id, contentId, contentType, status,
    media, mediaType, authorId, parentId,
    likesCount, replayCount,
    createdAt, updatedAt
  } = comment
  const convertedComment: Comment = {
    _id, contentId, contentType, status,
    media, mediaType, authorId,
    parentId, likesCount, replayCount,
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedComment
}

export const convertCommentForDb = (comment: Comment): Partial<IComment> => {
  const {
    _id,
    createdAt, updatedAt, mediaType,
    status, contentType, ...rest
  } = comment

  const convertedComment: Partial<IComment> = {
    ...rest,
    mediaType: mediaType as IComment["mediaType"],
    contentType: mediaType as IComment["contentType"],
    status: status as IComment["status"],
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedComment
}

export const convertLikeForGrpc = (like: ILike): Like => {
  const { contentType, updatedAt, createdAt, _id, contentId, authorId } = like
  const convertedLike: Like = {
    _id, contentId, authorId,
    contentType: contentType as ILike["contentType"],
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedLike
}

export const convertLikeForDb = (like: Like): ILike => {
  const { contentType, updatedAt, createdAt, _id, contentId, authorId } = like
  const convertedLike: Partial<ILike> = {
    _id, contentId, authorId,
    contentType: contentType as ILike["contentType"],
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedLike as ILike
}
