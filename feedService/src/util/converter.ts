import { Date as DbDate, Schema, Types } from "mongoose"
import IPost from "../interfaces/IPost"
import { Post } from "../proto/feed/Post"
import IComment from "../interfaces/IComment"
import { Like } from "../proto/feed/Like"
import ILike from '../interfaces/ILike'
import { IPostDb } from "../model/postModel"
import { ILikeDb } from "../model/likeModel"
import { ICommentDb } from "../model/commentModel"
import { ISavedDb } from "../model/savedModel"
import { IReportDb } from "../model/reportModel"
import ISaved from "../interfaces/ISaved"
import IReport from "../interfaces/IReport"

export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}


export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}

const convertDbDateToIsoString = (dbDate: DbDate): string => {
  return new Date(dbDate.toString()).toISOString()
}


// * post
export const convertPostForDb = (post: Post): Partial<IPost> => {
  const { createdAt, updatedAt, mediaType, status, _id, ...rest } = post
  const convertedPost: Partial<IPost> = {
    ...rest,
    mediaType: mediaType as 'image' | 'video' | 'text',
    status: status as 'active' | 'deleted' | 'blocked',
  }
  return convertedPost
}

export const convertIPostDbToIPost = (post: IPostDb): IPost => {
  return {
    _id: post._id.toString(),
    desc: post.desc,
    tags: post.tags,
    mediaType: post.mediaType,
    media: post.media,
    authorId: post.authorId.toString(),
    status: post.status,
    likesCount: post.likesCount,
    reportsCount: post.reportsCount,
    commentCount: post.commentCount,
    shareCount: post.shareCount,
    updatedAt: convertDbDateToIsoString(post.createdAt),
    createdAt: convertDbDateToIsoString(post.updatedAt),
  }
}

export const convertIPostToIPostDb = (post: Partial<IPost>): Partial<IPostDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    authorId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const postDb: Partial<IPostDb> = {}
  Object.keys(post).forEach((key) => {
    const typedKey = key as keyof IPost;
    if (post[typedKey] && conversionMap[typedKey]) {
      postDb[typedKey] = conversionMap[typedKey](post[typedKey])
    } else if (post[typedKey]) {
      if (!post.desc) postDb.desc = post.desc;
      if (!post.tags) postDb.tags = post.tags;
      if (!post.mediaType) postDb.mediaType = post.mediaType;
      if (!post.media) postDb.media = post.media;
      if (!post.status) postDb.status = post.status;
      if (!post.likesCount) postDb.likesCount = post.likesCount;
      if (!post.reportsCount) postDb.reportsCount = post.reportsCount;
      if (!post.commentCount) postDb.commentCount = post.commentCount;
      if (!post.shareCount) postDb.shareCount = post.shareCount;
    }
  })
  return postDb
}

// * comment
export const convertICommentToICommentDb = (comment: Partial<IComment>): Partial<ICommentDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    authorId: convertToObjectId,
    parentId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const commentDb: Partial<ICommentDb> = {}
  Object.keys(comment).forEach((key) => {
    const typedKey = key as keyof IComment;
    if (comment[typedKey] && conversionMap[typedKey]) {
      commentDb[typedKey] = conversionMap[typedKey](comment[typedKey])
    } else if (comment[typedKey]) {
      commentDb[typedKey as keyof ICommentDb] = comment[typedKey] as any;
    }
  })
  return commentDb
}

export const convertICommentDbToIComment = (comment: ICommentDb): IComment => {
  return {
    _id: comment._id.toString(),
    media: comment.media,
    mediaType: comment.mediaType,
    status: comment.status,
    authorId: comment.authorId.toString(),
    parentId: comment?.parentId?.toString(),
    likesCount: comment.likesCount,
    replayCount: comment.replayCount,
    contentId: comment.contentId.toString(),
    contentType: comment.contentType,
    updatedAt: convertDbDateToIsoString(comment.updatedAt),
    createdAt: convertDbDateToIsoString(comment.createdAt),
  }
}


// * like
export const convertLikeForDb = (like: Like): ILike => {
  const { contentType, ...rest } = like
  const convertedLike: Partial<ILike> = {
    ...rest,
    contentType: contentType as ILike["contentType"],
  }
  return convertedLike as ILike
}

export const convertILikeToILikeDb = (like: Partial<ILike>): Partial<ILikeDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    authorId: convertToObjectId,
    contentId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const likeDb: Partial<ILikeDb> = {}
  Object.keys(like).forEach((key) => {
    const typedKey = key as keyof ILike;
    if (like[typedKey] && conversionMap[typedKey]) {
      likeDb[typedKey] = conversionMap[typedKey](like[typedKey])
    } else if (like[typedKey]) {
      likeDb[typedKey as keyof ILikeDb] = like[typedKey] as any;
    }
  })
  return likeDb
}

export const convertILIkeDbToILIke = (like: ILikeDb): ILike => {
  return {
    _id: like._id.toString(),
    authorId: like.authorId.toString(),
    contentId: like.contentId.toString(),
    contentType: like.contentType,
    updatedAt: convertDbDateToIsoString(like.updatedAt),
    createdAt: convertDbDateToIsoString(like.createdAt)
  }
}


// * saved
export const convertISavedToISavedDb = (saved: Partial<ISaved>): Partial<ISavedDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    postId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const savedDb: Partial<ISavedDb> = {}
  Object.keys(saved).forEach((key) => {
    const typedKey = key as keyof ISaved;
    if (saved[typedKey] && conversionMap[typedKey]) {
      savedDb[typedKey] = conversionMap[typedKey](saved[typedKey])
    } else if (saved[typedKey]) {
      savedDb[typedKey as keyof ISavedDb] = saved[typedKey] as any;
    }
  })
  return savedDb
}

export const convertISavedDbToISaved = (saved: ISavedDb): ISaved => {
  return {
    _id: saved._id.toString(),
    userId: saved.userId.toString(),
    postId: saved.postId.toString(),
    updatedAt: convertDbDateToIsoString(saved.updatedAt),
    createdAt: convertDbDateToIsoString(saved.createdAt)
  }
}

// * report
export const convertIReportToIReportDb = (report: Partial<IReport>): Partial<IReportDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    contentId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const reportDb: Partial<IReportDb> = {}
  Object.keys(report).forEach((key) => {
    const typedKey = key as keyof IReport;
    if (report[typedKey] && conversionMap[typedKey]) {
      reportDb[typedKey] = conversionMap[typedKey](report[typedKey])
    } else if (report[typedKey]) {
      reportDb[typedKey as keyof IReportDb] = report[typedKey] as any;
    }
  })
  return reportDb
}

export const convertIReportDbToIReport = (report: IReportDb): IReport => {
  return {
    _id: report._id.toString(),
    userId: report.userId.toString(),
    contentId: report.contentId.toString(),
    contentType: report.contentType as unknown as IReport['contentType'],
    description: report.description,
    updatedAt: convertDbDateToIsoString(report.updatedAt),
    createdAt: convertDbDateToIsoString(report.createdAt)
  }
}