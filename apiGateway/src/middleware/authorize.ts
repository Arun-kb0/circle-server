import { NextCall } from "@grpc/grpc-js";
import { NextFunction, Request, Response } from "express";
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import path from 'path'
import getPackageDef from '../util/getPackageDef'
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from "../protos/auth";
import { AuthRequest } from "../constants/types";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'auth.proto')
const HOST = process.env.AUTH_SERVICE_HOST || 'localhost'
const PORT = process.env.AUTH_SERVICE_PORT || 50051
const IP_ADDRESS = `${HOST}:${PORT}`

const packageDef = getPackageDef(PROTO_PATH)
const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new authProto.authType.AuthService(
  IP_ADDRESS,
  grpc.credentials.createInsecure()
)


const authorize = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    if (!authHeader) throw new HttpError(httpStatus.UNAUTHORIZED, 'token not found')
    console.log(authHeader)
    const token = authHeader.split(' ')[1]
    client.jwtVerify({ accessToken: token }, (err, msg) => {
      if (err?.code === grpc.status.UNAUTHENTICATED) {
        return next(new HttpError(httpStatus.UNAUTHORIZED, err.message))
      }
      if (!msg) return next(new Error('grpc response is empty'))
      req.username = msg.username
      next()
    })
  } catch (error) {
    next(error)
  }
}


export default authorize