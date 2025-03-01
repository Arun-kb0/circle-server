import { NextFunction, Request, Response } from "express";
import NotificationGrpcClient from '../config/NotificationGrpcClient'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";

const client = NotificationGrpcClient.getClient()

export const getNotifications = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, receiverId } = req.query
    console.log(req.query)
    if (isNaN(Number(page)) || typeof receiverId !== 'string') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'page and receiverId are required')
    }
    client.getNotifications({ page: Number(page), receiverId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new Error('grpc response is empty'))
      res.status(httpStatus.OK).json({ message: 'get notifications success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const readNotifications = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { notificationIds } = req.body
    console.log(req.body)
    if (!Array.isArray(notificationIds)) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'notificationIds must be an array')
    }
    client.readNotifications({ notificationIds }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new Error('grpc response is empty'))
      res.status(httpStatus.OK).json({ message: 'read notifications success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}
