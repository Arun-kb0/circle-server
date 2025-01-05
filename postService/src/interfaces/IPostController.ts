import * as grpc from '@grpc/grpc-js'
import { CreatePostRequest__Output } from '../proto/post/CreatePostRequest'
import { CreatePostResponse } from '../proto/post/CreatePostResponse'
import { UpdatePostRequest__Output } from '../proto/post/UpdatePostRequest'
import { UpdatePostResponse } from '../proto/post/UpdatePostResponse'
import { DeletePostRequest__Output } from '../proto/post/DeletePostRequest'
import { DeletePostResponse } from '../proto/post/DeletePostResponse'
import { CommentPostRequest__Output } from '../proto/post/CommentPostRequest'
import { CommentPostResponse } from '../proto/post/CommentPostResponse'
import { LikePostRequest__Output } from '../proto/post/LikePostRequest'
import { LikePostResponse } from '../proto/post/LikePostResponse'


export type CreatePostHandler = grpc.handleUnaryCall<CreatePostRequest__Output, CreatePostResponse>
export type UpdatePostHandler = grpc.handleUnaryCall<UpdatePostRequest__Output, UpdatePostResponse>
export type DeletePostHandler = grpc.handleUnaryCall<DeletePostRequest__Output, DeletePostResponse>
export type CommentPostHandler = grpc.handleUnaryCall<CommentPostRequest__Output, CommentPostResponse>
export type LikePostHandler = grpc.handleUnaryCall<LikePostRequest__Output, LikePostResponse>


interface IPostController {

  createPost: CreatePostHandler
  updatePost: UpdatePostHandler
  deletePost: DeletePostHandler

  commentPost: CommentPostHandler
  likePost: LikePostHandler
}

export default IPostController