import { NextFunction, Request, Response } from "express";
import * as grpc from '@grpc/grpc-js'
import path from 'path'
import getPackageDef from '../util/getPackageDef'
import { ProtoGrpcType } from '../protos/user'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'user.proto')
const HOST = process.env.USER_SERVICE_HOST || 'localhost'
const PORT = process.env.USER_SERVICE_PORT || 50052
const IP_ADDRESS = `${HOST}:${PORT}`

const packageDef = getPackageDef(PROTO_PATH)
const userProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new userProto.user.UserService(
  IP_ADDRESS,
  grpc.credentials.createInsecure()
)


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

