import { NextFunction, Request, Response } from "express";
import httpStatus from "../constants/httpStatus";
import { AuthRequest } from "../constants/types";
import HttpError from "../util/HttpError";
import PostGrpcClient from '../config/PostGrpcClient'
import { _post_ReportEnums_ContentType } from "../protos/postProto/post/ReportEnums";

const client = PostGrpcClient.getClient()

export const createPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { post } = req.body
    const { userId } = req
    post.authorId = userId
    client.createPost({ post }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post not created.'))
      res.status(httpStatus.OK).json({ message: 'create post success', post: msg.post })
    })
  } catch (error) {
    next(error)
  }
}

export const updatePost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params
    const { post } = req.body
    const { userId } = req
    console.log('update image controller')
    console.log(req.params, userId)
    if (!post || typeof postId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'post and postId required')
    if (post.authorId !== userId) throw new HttpError(httpStatus.UNAUTHORIZED, 'only author can update post')
    client.updatePost({ post, postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post creation failed.'))
      res.status(httpStatus.OK).json({ message: 'update post success', post: msg.post })
    })
  } catch (error) {
    next(error)
  }
}

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params
    if (!postId) throw new HttpError(httpStatus.BAD_REQUEST, 'postId is required')
    client.deletePost({ postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post deletion failed.'))
      res.status(httpStatus.OK).json({ message: "delete post success", postId: msg.postId })
    })
  } catch (error) {
    next(error)
  }
}

export const savePost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    const { postId } = req.body
    if (typeof postId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'PostId and userId are required')
    client.savePost({ userId, postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Post save failed.'))
      res.status(httpStatus.OK).json({ message: "Post save success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const reportPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    const { contentId, contentType } = req.body
    if (typeof contentId !== 'string' || typeof contentType !== 'string') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'ContentId and ContentType are required')
    }
    const reportContentType = contentType as _post_ReportEnums_ContentType
    client.reportPost({ contentId, userId, contentType: reportContentType }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post save failed.'))
      res.status(httpStatus.OK).json({ message: "post save success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

