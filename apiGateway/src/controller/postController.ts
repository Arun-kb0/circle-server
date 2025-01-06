import { NextFunction, Request, Response } from "express";
import httpStatus from "../constants/httpStatus";
import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from "../protos/postProto/post";
import { AuthRequest } from "../constants/types";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'postProto', 'post.proto')
const HOST = process.env.POST_SERVICE_HOST || 'localhost'
const PORT = process.env.POST_SERVICE_PORT || 50053
const IP_ADDRESS = `${HOST}:${PORT}`

const packageDef = getPackageDef(PROTO_PATH)
const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new authProto.post.PostService(
  IP_ADDRESS,
  grpc.credentials.createInsecure()
)


export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const createPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { post } = req.body
    const user = req.username

    client.createPost({ post }, (err, msg) => {

    })
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const CommentPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}

export const LikePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}
