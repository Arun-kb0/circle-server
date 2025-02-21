import { NextFunction, Request, Response } from "express"
import PostGrpcClient from '../config/PostGrpcClient'
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import { AuthRequest } from '../constants/types'


const client = PostGrpcClient.getClient()

export const like = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { contentId, contentType, } = req.body
    const { userId } = req
    if (!contentId || !contentType) throw new HttpError(httpStatus.BAD_REQUEST, ' contentId and contentType are required.')
    client.like({ contentId, contentType, authorId: userId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'create comment failed.'))
      res.status(httpStatus.OK).json({ message: 'like success', like: msg.like })
    })
  } catch (error) {
    next(error)
  }
}

export const unlike = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { contentId } = req.params
    const { userId } = req
    if (typeof contentId !== "string") throw new HttpError(httpStatus.BAD_REQUEST, ' contentId is required.')
    client.unLike({ contentId, authorId: userId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'create comment failed.'))
      res.status(httpStatus.OK).json({ message: 'unlike success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}