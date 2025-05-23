import { NextFunction, Request, Response } from "express";
import * as grpc from '@grpc/grpc-js'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import UserGrpcClient from '../config/UserGrpcClient'
import { AuthRequest } from "../constants/types";
import liveUsersMap from "../util/liveUsersMap";
import { channelOptionsEqual } from "@grpc/grpc-js/build/src/channel-options";


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

export const updateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const { userId } = req
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
    const { page, userId } = req.query
    const currentUserId = req.userId
    console.log('get followers')
    console.log(userId, currentUserId)
    if (typeof userId !== 'string' && isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required.')
    client.getFollowers({ userId: String(userId), page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no users found'))
      res.status(httpStatus.OK).json({ message: "get followers success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getFollowing = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page, userId } = req.query
    if (typeof userId !== 'string' && isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required.')
    client.getFollowing({ userId: String(userId), page: Number(page) }, (err, msg) => {
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
    console.log('suggested people call ', userId, page)
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

export const getLiveUsers = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    client.getMultipleUser({ userIds: [...liveUsersMap.keys()] }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no users found'))
      res.status(httpStatus.OK).json({ message: "get live users details success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}


export const getUserBlockedUsersByBlockerId = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page, blockerUserId } = req.query
    if(typeof blockerUserId !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and blockerUserId are required.')
    client.getBlockedUsersByBlockerId({ page: Number(page) , blockerUserId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no blocked users found'))
      res.status(httpStatus.OK).json({ message: "get blocked users success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getUserBlockedByBlockerAndBlockedId = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { blockerUserId, blockedUserId } = req.query
    if (typeof blockerUserId !== 'string' || typeof blockedUserId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'blockedUserId and blockerUserId are required.')
    client.getBlockedUserByBlockerAndBlockedId({ blockedUserId , blockerUserId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'no blocked user found'))
      res.status(httpStatus.OK).json({ message: "get blocked user success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const createUserBlockedUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { blockerUserId, blockedUserId } = req.body
    if (typeof blockerUserId !== 'string' || typeof blockedUserId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'blockedUserId and blockerUserId are required.')
    client.createBlockedUser({ blockedUserId , blockerUserId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'create blocked user found'))
      res.status(httpStatus.OK).json({ message: "create blocked user success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const deleteUserBlockedUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { blockerUserId, blockedUserId } = req.query
    console.log("deleteUserBlockedUser req.query")
    console.log(req.query)
    if (typeof blockerUserId !== 'string' || typeof blockedUserId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'blockedUserId and blockerUserId are required.')
    client.deleteBlockedUser({ blockedUserId , blockerUserId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.NOT_FOUND, 'delete blocked user found'))
      res.status(httpStatus.OK).json({ message: "delete blocked user success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}