import { NextFunction, Request, Response } from "express"
import PostGrpcClient from '../config/PostGrpcClient'
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import { AuthRequest } from '../constants/types'

const client = PostGrpcClient.getClient()



export const createComment = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { comment, contentId, contentType } = req.body
    const { userId } = req
    if (!comment || !contentId || !contentType) throw new HttpError(httpStatus.BAD_REQUEST, 'comment , contentId and contentType are required.')
    const commentWithAuthorId = { ...comment, authorId: userId }
    client.createComment({ comment: commentWithAuthorId, contentId, contentType }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'create comment failed.'))
      res.status(httpStatus.OK).json({ message: 'create comment success', comment: msg.comment })
    })
  } catch (error) {
    next(error)
  }
}

export const updateComment = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { comment, commentId } = req.body
    const { userId } = req
    if (!comment || !commentId) throw new HttpError(httpStatus.BAD_REQUEST, 'comment , contentId and contentType are required.')
    if (comment.authorId !== userId) throw new HttpError(httpStatus.BAD_REQUEST, 'only author can update comment.')
    client.updateComment({ comment, commentId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'update comment failed.'))
      res.status(httpStatus.OK).json({ message: 'update comment success', comment: msg.comment })
    })
  } catch (error) {
    next(error)
  }
}

export const deleteComment = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { commentId } = req.params
    if (!commentId) throw new HttpError(httpStatus.BAD_REQUEST, 'commentId is required.')
    client.deleteComment({ commentId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'delete comment failed.'))
      res.status(httpStatus.OK).json({ message: 'delete comment success', commentId: msg.commentId })
    })
  } catch (error) {
    next(error)
  }
}


