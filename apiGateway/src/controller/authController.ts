import { NextFunction, Request, Response } from "express";
import * as protoLoader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'
import path from 'path'
import getPackageDef from '../util/createPackageDef'
import { ProtoGrpcType } from "../protos/auth";
import httpStatus from "../constants/httpStatus";

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


export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    console.log(email,password)
    client.login({ email, password }, (err, msg) => {
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      const { refreshToken, ...data } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
      })
      res.status(httpStatus.OK).json({ message: 'login success', ...data })
    })
  } catch (error) {
    next(error)
  }
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {

}

export const logout = async (req: Request, res: Response, next: NextFunction) => {

}

export const verify = async (req: Request, res: Response, next: NextFunction) => {

}