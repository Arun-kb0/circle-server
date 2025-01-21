import * as grpc from '@grpc/grpc-js'
import { CreateMessageRequest__Output } from '../proto/chat/CreateMessageRequest'
import { CreateMessageResponse } from '../proto/chat/CreateMessageResponse'
import { UpdateMessageRequest__Output } from '../proto/chat/UpdateMessageRequest'
import { UpdateMessageResponse } from '../proto/chat/UpdateMessageResponse'
import { DeleteMessageRequest__Output } from '../proto/chat/DeleteMessageRequest'
import { DeleteMessageResponse } from '../proto/chat/DeleteMessageResponse'
import { FindMessageByIdRequest__Output } from '../proto/chat/FindMessageByIdRequest'
import { FindMessageByIdResponse } from '../proto/chat/FindMessageByIdResponse'
import { FindMessageByUserRequest__Output } from '../proto/chat/FindMessageByUserRequest'
import { FindMessageByUserResponse } from '../proto/chat/FindMessageByUserResponse'


export type CreateMessageHandler = grpc.handleUnaryCall<CreateMessageRequest__Output, CreateMessageResponse>
export type UpdateMessageHandler = grpc.handleUnaryCall<UpdateMessageRequest__Output, UpdateMessageResponse>
export type DeleteMessageHandler = grpc.handleUnaryCall<DeleteMessageRequest__Output, DeleteMessageResponse>
export type FindMessageByUerHandler = grpc.handleUnaryCall<FindMessageByUserRequest__Output, FindMessageByUserResponse>
export type FindMessageMessageHandler = grpc.handleUnaryCall<FindMessageByIdRequest__Output, FindMessageByIdResponse>

interface IChatController {
  createMessage: CreateMessageHandler
  updateMessage: UpdateMessageHandler
  deleteMessage: DeleteMessageHandler
  findMessageByUser: FindMessageByUerHandler
  findMessageById: FindMessageMessageHandler
}

export default IChatController