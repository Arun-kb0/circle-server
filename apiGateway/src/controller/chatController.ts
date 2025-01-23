import { NextFunction, Request, Response } from "express"
import httpStatus from '../constants/httpStatus'
import HttpError from '../util/HttpError'
import ChatGrpcClient from '../config/ChatGrpcClient'

const chatClient = ChatGrpcClient.getClient()

export const getRoomMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId, page } = req.query
    if (typeof roomId !== 'string' || typeof page !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'roomId and page are required.')
    if (isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page must be a number.')

    chatClient.getMessages({ roomId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get messages failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}