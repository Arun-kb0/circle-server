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
import { GetMessagesRequest__Output } from '../proto/chat/GetMessagesRequest'
import { GetMessagesResponse } from '../proto/chat/GetMessagesResponse'
import { DeleteRoomMessagesRequest__Output } from '../proto/chat/DeleteRoomMessagesRequest'
import { DeleteRoomMessagesResponse } from '../proto/chat/DeleteRoomMessagesResponse'

import { CreateRoomRequest__Output } from '../proto/chat/CreateRoomRequest'
import { CreateRoomResponse } from '../proto/chat/CreateRoomResponse'
import { UpdateRoomRequest__Output } from '../proto/chat/UpdateRoomRequest'
import { UpdateRoomResponse } from '../proto/chat/UpdateRoomResponse'
import { DeleteRoomRequest__Output } from '../proto/chat/DeleteRoomRequest'
import { DeleteRoomResponse } from '../proto/chat/DeleteRoomResponse'
import { FindRoomByRoomIdRequest__Output } from '../proto/chat/FindRoomByRoomIdRequest'
import { FindRoomByRoomIdResponse } from '../proto/chat/FindRoomByRoomIdResponse'



export type CreateMessageHandler = grpc.handleUnaryCall<CreateMessageRequest__Output, CreateMessageResponse>
export type UpdateMessageHandler = grpc.handleUnaryCall<UpdateMessageRequest__Output, UpdateMessageResponse>
export type DeleteMessageHandler = grpc.handleUnaryCall<DeleteMessageRequest__Output, DeleteMessageResponse>
export type FindMessageByUerHandler = grpc.handleUnaryCall<FindMessageByUserRequest__Output, FindMessageByUserResponse>
export type FindMessageMessageHandler = grpc.handleUnaryCall<FindMessageByIdRequest__Output, FindMessageByIdResponse>
export type GetMessageHandler = grpc.handleUnaryCall<GetMessagesRequest__Output, GetMessagesResponse>
export type DeleteRoomMessagesHandler = grpc.handleUnaryCall<DeleteRoomMessagesRequest__Output, DeleteRoomMessagesResponse>


export type CreateRoomHandler = grpc.handleUnaryCall<CreateRoomRequest__Output, CreateRoomResponse>
export type UpdateRoomHandler = grpc.handleUnaryCall<UpdateRoomRequest__Output, UpdateRoomResponse>
export type DeleteRoomHandler = grpc.handleUnaryCall<DeleteRoomRequest__Output, DeleteRoomResponse>
export type FindRoomByRoomIdHandler = grpc.handleUnaryCall<FindRoomByRoomIdRequest__Output, FindRoomByRoomIdResponse>



interface IChatController {
  createMessage: CreateMessageHandler
  updateMessage: UpdateMessageHandler
  deleteMessage: DeleteMessageHandler
  findMessageByUser: FindMessageByUerHandler
  findMessageById: FindMessageMessageHandler
  getMessages: GetMessageHandler,
  deleteRoomMessages: DeleteRoomMessagesHandler

  createRoom: CreateRoomHandler,
  updateRoom: UpdateRoomHandler,
  deleteRoom: DeleteRoomHandler,
  findRoomByRoomId: FindRoomByRoomIdHandler
}

export default IChatController