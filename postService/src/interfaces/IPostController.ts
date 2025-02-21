import * as grpc from '@grpc/grpc-js'
import { CreatePostRequest__Output } from '../proto/post/CreatePostRequest'
import { CreatePostResponse } from '../proto/post/CreatePostResponse'
import { UpdatePostRequest__Output } from '../proto/post/UpdatePostRequest'
import { UpdatePostResponse } from '../proto/post/UpdatePostResponse'
import { DeletePostRequest__Output } from '../proto/post/DeletePostRequest'
import { DeletePostResponse } from '../proto/post/DeletePostResponse'
import { CreateCommentRequest__Output } from '../proto/post/CreateCommentRequest'
import { CreateCommentResponse } from '../proto/post/CreateCommentResponse'
import { LikeRequest__Output } from '../proto/post/LikeRequest'
import { LikeResponse } from '../proto/post/LikeResponse'


export type CreatePostHandler = grpc.handleUnaryCall<CreatePostRequest__Output, CreatePostResponse>
export type UpdatePostHandler = grpc.handleUnaryCall<UpdatePostRequest__Output, UpdatePostResponse>
export type DeletePostHandler = grpc.handleUnaryCall<DeletePostRequest__Output, DeletePostResponse>


interface IPostController {

  createPost: CreatePostHandler
  updatePost: UpdatePostHandler
  deletePost: DeletePostHandler
}

export default IPostController