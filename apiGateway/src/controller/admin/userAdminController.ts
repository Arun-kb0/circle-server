import UserGrpcClient from '../../config/UserGrpcClient'
import { NextFunction, Request, Response } from 'express'
import HttpError from '../../util/HttpError'
import httpStatus from '../../constants/httpStatus'
import * as grpc from '@grpc/grpc-js'

const userClient = UserGrpcClient.getClient()

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, startDate, endDate, searchText } = req.query
    if (!page || Number.isNaN(page)) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required')
    const start = typeof startDate === 'string' ? startDate : undefined
    const end = typeof endDate === 'string' ? endDate : undefined
    const searchTextReq = typeof searchText === 'string' ? searchText : undefined

    userClient.getAllUsers({ page: Number(page), startDate: start, endDate: end, searchText: searchTextReq }, (err, msg) => {
      if (err?.code === grpc.status.INVALID_ARGUMENT) return next(new HttpError(httpStatus.BAD_REQUEST, err.message))
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg || !msg.users) return next(new HttpError(httpStatus.NOT_FOUND, 'users not found'))
      res.status(httpStatus.OK).json({ message: 'get users success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}


export const blockUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query
    if (!userId || typeof userId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'userId and user is required.')
    userClient.blockUser({ userId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message))
      if (!msg || !msg.userId) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "block user success", userId: msg.userId })
    })
  } catch (error) {
    next(error)
  }
}

export const unblockUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query
    if (!userId || typeof userId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'userId and user is required.')
    userClient.unblockUser({ userId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message))
      if (!msg || !msg.userId) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "block user success", userId: msg.userId })
    })
  } catch (error) {
    next(error)
  }
}