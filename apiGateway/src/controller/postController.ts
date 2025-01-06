import { NextFunction, Request, Response } from "express";
import httpStatus from "../constants/httpStatus";
import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from "../protos/postProto/post";
import { AuthRequest } from "../constants/types";
import HttpError from "../util/HttpError";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'postProto', 'post.proto')
const PORT = process.env.POST_SERVICE_PORT || 50053
const HOST = process.env.POST_SERVICE_HOST || 'host.docker.internal'
const IP_ADDRESS = `${HOST}:${PORT}`
console.log("post service ip = ",IP_ADDRESS)

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
    const {post} = req.body
    const { userId } = req
    post.authorId = userId
    console.log(post)
    client.createPost({ post }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post not created.'))
      res.status(httpStatus.OK).json({ message: 'create post success', post: msg.post })
    })
  } catch (error) {
    next(error)
  }
}

export const updatePost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { post, postId } = req.body
    const { userId } = req
    if (!post || typeof postId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'post and postId required')
    if (post.authorId !== userId) throw new HttpError(httpStatus.UNAUTHORIZED, 'only author can update post')
    client.updatePost({ post, postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post creation failed.'))
      res.status(httpStatus.OK).json({ message: 'update post success', post: msg.post })
    })
  } catch (error) {
    next(error)
  }
}

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params
    if (!postId) throw new HttpError(httpStatus.BAD_REQUEST, 'postId is required')
    client.deletePost({ postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post deletion failed.'))
      res.status(httpStatus.OK).json({ message: "delete post success", postId: msg.postId })
    })
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
