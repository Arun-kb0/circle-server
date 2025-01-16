import { NextFunction, Request, Response } from "express";
import * as grpc from '@grpc/grpc-js'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import UserGrpcClient from '../config/UserGrpcClient'
import { AuthRequest } from "../constants/types";


const client = UserGrpcClient.getClient()

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, startDate, endDate, searchText } = req.query
    if (!page || Number.isNaN(page)) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required')
    const start = typeof startDate === 'string' ? startDate : undefined
    const end = typeof endDate === 'string' ? endDate : undefined
    const searchTextReq = typeof searchText === 'string' ? searchText : undefined

    client.getAllUsers({ page: Number(page), startDate: start, endDate: end, searchText: searchTextReq }, (err, msg) => {
      if (err?.code === grpc.status.INVALID_ARGUMENT) return next(new HttpError(httpStatus.BAD_REQUEST, err.message))
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg || !msg.users) return next(new HttpError(httpStatus.NOT_FOUND, 'users not found'))
      res.status(httpStatus.OK).json({ message: 'get users success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params
    if (!userId) throw new HttpError(httpStatus.BAD_REQUEST, 'userId is required.')
    client.getUser({ userId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message))
      if (!msg || !msg.user) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "get user success", user: msg.user })
    })
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, user } = req.body
    if (!userId || !user) throw new HttpError(httpStatus.BAD_REQUEST, 'userId and user is required.')
    client.updateUser({ userId, user }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message))
      if (!msg || !msg.user) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "update user success", user: msg.user })
    })
  } catch (error) {
    next(error)
  }
}

export const blockUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query
    if (!userId || typeof userId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'userId and user is required.')
    client.blockUser({ userId }, (err, msg) => {
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
    client.unblockUser({ userId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message))
      if (!msg || !msg.userId) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "block user success", userId: msg.userId })
    })
  } catch (error) {
    next(error)
  }
}

// * follow
export const followUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { targetId } = req.body
    const { userId } = req
    if (typeof userId !== 'string' || typeof targetId !== 'string') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'userId and targetId is required.')
    }
    client.followUser({ userId, targetId }, (err, msg) => {
      if (err) return next(err)
      if (!msg || !msg.user) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "follow user success", user: msg.user })
    })
  } catch (error) {
    next(error)
  }
}

export const unFollowUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { targetId } = req.body
    const { userId } = req
    if (typeof userId !== 'string' || typeof targetId !== 'string') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'userId and targetId is required.')
    }
    client.unFollowUser({ userId, targetId }, (err, msg) => {
      if (err) return next(err)
      if (!msg || !msg.user) return next(new HttpError(httpStatus.NOT_FOUND, 'no user found'))
      res.status(httpStatus.OK).json({ message: "unfollow user success", user: msg.user })
    })
  } catch (error) {
    next(error)
  }
}

export const getFollowers = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query
    const { userId } = req
    console.warn('get followers ', userId)
    if (isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required.')
    client.getFollowers({ userId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no users found'))
      res.status(httpStatus.OK).json({ message: "get followers success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getSuggestedPeople = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query
    const { userId } = req
    if (isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required.')
    client.getSuggestedPeople({ userId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no users found'))
      res.status(httpStatus.OK).json({ message: "get suggested people success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

