import { NextFunction, Request, Response } from "express";
import httpStatus from "../constants/httpStatus";
import { AuthRequest } from "../constants/types";
import HttpError from "../util/HttpError";
import PostGrpcClient from '../config/PostGrpcClient'


const client = PostGrpcClient.getClient()

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {

    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const createPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { post } = req.body
    const { userId } = req
    console.log("create post --- --")
    console.log(req.body)
    console.log(userId)
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
    const { post, postId } = req.body
    const { userId } = req
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

