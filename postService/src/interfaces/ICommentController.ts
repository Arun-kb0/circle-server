import * as grpc from '@grpc/grpc-js'
import { CreateCommentRequest__Output } from '../proto/post/CreateCommentRequest'
import { CreateCommentResponse } from '../proto/post/CreateCommentResponse'
import { UpdateCommentRequest__Output } from '../proto/post/UpdateCommentRequest'
import { UpdateCommentResponse } from '../proto/post/UpdateCommentResponse'
import { DeleteCommentRequest__Output } from '../proto/post/DeleteCommentRequest'
import { DeleteCommentResponse } from '../proto/post/DeleteCommentResponse'

export type CreateCommentHandler = grpc.handleUnaryCall<CreateCommentRequest__Output, CreateCommentResponse>
export type UpdateCommentHandler = grpc.handleUnaryCall<UpdateCommentRequest__Output, UpdateCommentResponse>
export type DeleteCommentHandler = grpc.handleUnaryCall<DeleteCommentRequest__Output, DeleteCommentResponse>

interface ICommentController {
  createComment: CreateCommentHandler
  updateComment: UpdateCommentHandler
  deleteComment: DeleteCommentHandler
}

export default ICommentController