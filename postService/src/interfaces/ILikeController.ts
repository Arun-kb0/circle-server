import * as grpc from '@grpc/grpc-js'
import { LikeRequest__Output } from '../proto/post/LikeRequest'
import { LikeResponse } from '../proto/post/LikeResponse'
import { UnlikeRequest__Output } from '../proto/post/UnlikeRequest'
import { UnlikeResponse } from '../proto/post/UnlikeResponse'


export type LikeHandler = grpc.handleUnaryCall<LikeRequest__Output, LikeResponse>
export type UnlikeHandler = grpc.handleUnaryCall<UnlikeRequest__Output, UnlikeResponse>

interface ILikeController {
  like: LikeHandler
  unlike: UnlikeHandler
}

export default ILikeController