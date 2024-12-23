import { NextFunction, Request, Response } from "express";
import * as grpc from '@grpc/grpc-js'
import path, { resolve } from 'path'
import getPackageDef from '../util/createPackageDef'
import { ProtoGrpcType } from '../protos/user'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { rejections } from "winston";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'user.proto')
const HOST = process.env.AUTH_SERVICE_HOST || 'localhost'
const PORT = process.env.AUTH_SERVICE_PORT || 50052
const IP_ADDRESS = `${HOST}:${PORT}`

const packageDef = getPackageDef(PROTO_PATH)
const userProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new userProto.user.UserService(
  IP_ADDRESS,
  grpc.credentials.createInsecure()
)


export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    client.getAllUsers({}, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg || !msg.users) return next(new HttpError(httpStatus.NOT_FOUND, 'users not found'))
      res.status(httpStatus.OK).json({ message: 'get users success', users: msg.users })
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

  } catch (error) {
    next(error)
  }
}

export const blockUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (error) {
    next(error)
  }
}

