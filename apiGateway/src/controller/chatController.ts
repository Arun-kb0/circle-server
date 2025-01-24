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


export const updateMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body
    const { messageId } = req.params
    if (typeof message !== 'object') throw new HttpError(httpStatus.BAD_REQUEST, 'message is required.')
    chatClient.updateMessage({ message }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'update messages failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { messageId } = req.params

    if (typeof messageId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'messageId is required.')
    chatClient.deleteMessage({ messageId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'delete messages failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const clearRoomChat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    if (typeof roomId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'roomId is required.')
    chatClient.deleteRoomMessages({ roomId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'clearRoomChat failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}


// * chat room
export const deleteChatRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    if (typeof roomId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'roomId is required.')
    chatClient.deleteRoom({ chatRoomId: roomId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'delete room failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const findChatRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.query
    if (typeof roomId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'roomId is required.')
    chatClient.findRoomByRoomId({ chatRoomId: roomId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'delete room failed.'))
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}
