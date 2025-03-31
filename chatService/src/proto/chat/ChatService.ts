// Original file: src/proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateMessageRequest as _chat_CreateMessageRequest, CreateMessageRequest__Output as _chat_CreateMessageRequest__Output } from '../chat/CreateMessageRequest';
import type { CreateMessageResponse as _chat_CreateMessageResponse, CreateMessageResponse__Output as _chat_CreateMessageResponse__Output } from '../chat/CreateMessageResponse';
import type { CreateRoomRequest as _chat_CreateRoomRequest, CreateRoomRequest__Output as _chat_CreateRoomRequest__Output } from '../chat/CreateRoomRequest';
import type { CreateRoomResponse as _chat_CreateRoomResponse, CreateRoomResponse__Output as _chat_CreateRoomResponse__Output } from '../chat/CreateRoomResponse';
import type { DeleteMessageRequest as _chat_DeleteMessageRequest, DeleteMessageRequest__Output as _chat_DeleteMessageRequest__Output } from '../chat/DeleteMessageRequest';
import type { DeleteMessageResponse as _chat_DeleteMessageResponse, DeleteMessageResponse__Output as _chat_DeleteMessageResponse__Output } from '../chat/DeleteMessageResponse';
import type { DeleteRoomMessagesRequest as _chat_DeleteRoomMessagesRequest, DeleteRoomMessagesRequest__Output as _chat_DeleteRoomMessagesRequest__Output } from '../chat/DeleteRoomMessagesRequest';
import type { DeleteRoomMessagesResponse as _chat_DeleteRoomMessagesResponse, DeleteRoomMessagesResponse__Output as _chat_DeleteRoomMessagesResponse__Output } from '../chat/DeleteRoomMessagesResponse';
import type { DeleteRoomRequest as _chat_DeleteRoomRequest, DeleteRoomRequest__Output as _chat_DeleteRoomRequest__Output } from '../chat/DeleteRoomRequest';
import type { DeleteRoomResponse as _chat_DeleteRoomResponse, DeleteRoomResponse__Output as _chat_DeleteRoomResponse__Output } from '../chat/DeleteRoomResponse';
import type { FindMessageByIdRequest as _chat_FindMessageByIdRequest, FindMessageByIdRequest__Output as _chat_FindMessageByIdRequest__Output } from '../chat/FindMessageByIdRequest';
import type { FindMessageByIdResponse as _chat_FindMessageByIdResponse, FindMessageByIdResponse__Output as _chat_FindMessageByIdResponse__Output } from '../chat/FindMessageByIdResponse';
import type { FindMessageByUserRequest as _chat_FindMessageByUserRequest, FindMessageByUserRequest__Output as _chat_FindMessageByUserRequest__Output } from '../chat/FindMessageByUserRequest';
import type { FindMessageByUserResponse as _chat_FindMessageByUserResponse, FindMessageByUserResponse__Output as _chat_FindMessageByUserResponse__Output } from '../chat/FindMessageByUserResponse';
import type { FindRoomByRoomIdRequest as _chat_FindRoomByRoomIdRequest, FindRoomByRoomIdRequest__Output as _chat_FindRoomByRoomIdRequest__Output } from '../chat/FindRoomByRoomIdRequest';
import type { FindRoomByRoomIdResponse as _chat_FindRoomByRoomIdResponse, FindRoomByRoomIdResponse__Output as _chat_FindRoomByRoomIdResponse__Output } from '../chat/FindRoomByRoomIdResponse';
import type { FindUsersChatLaseMessagesRequest as _chat_FindUsersChatLaseMessagesRequest, FindUsersChatLaseMessagesRequest__Output as _chat_FindUsersChatLaseMessagesRequest__Output } from '../chat/FindUsersChatLaseMessagesRequest';
import type { FindUsersChatLaseMessagesResponse as _chat_FindUsersChatLaseMessagesResponse, FindUsersChatLaseMessagesResponse__Output as _chat_FindUsersChatLaseMessagesResponse__Output } from '../chat/FindUsersChatLaseMessagesResponse';
import type { GetMessagesRequest as _chat_GetMessagesRequest, GetMessagesRequest__Output as _chat_GetMessagesRequest__Output } from '../chat/GetMessagesRequest';
import type { GetMessagesResponse as _chat_GetMessagesResponse, GetMessagesResponse__Output as _chat_GetMessagesResponse__Output } from '../chat/GetMessagesResponse';
import type { UpdateMessageRequest as _chat_UpdateMessageRequest, UpdateMessageRequest__Output as _chat_UpdateMessageRequest__Output } from '../chat/UpdateMessageRequest';
import type { UpdateMessageResponse as _chat_UpdateMessageResponse, UpdateMessageResponse__Output as _chat_UpdateMessageResponse__Output } from '../chat/UpdateMessageResponse';
import type { UpdateRoomRequest as _chat_UpdateRoomRequest, UpdateRoomRequest__Output as _chat_UpdateRoomRequest__Output } from '../chat/UpdateRoomRequest';
import type { UpdateRoomResponse as _chat_UpdateRoomResponse, UpdateRoomResponse__Output as _chat_UpdateRoomResponse__Output } from '../chat/UpdateRoomResponse';

export interface ChatServiceClient extends grpc.Client {
  CreateMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  
  CreateRoom(argument: _chat_CreateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  CreateRoom(argument: _chat_CreateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  CreateRoom(argument: _chat_CreateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  CreateRoom(argument: _chat_CreateRoomRequest, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  createRoom(argument: _chat_CreateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  createRoom(argument: _chat_CreateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  createRoom(argument: _chat_CreateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  createRoom(argument: _chat_CreateRoomRequest, callback: grpc.requestCallback<_chat_CreateRoomResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteRoom(argument: _chat_DeleteRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoom(argument: _chat_DeleteRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoom(argument: _chat_DeleteRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoom(argument: _chat_DeleteRoomRequest, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  deleteRoom(argument: _chat_DeleteRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  deleteRoom(argument: _chat_DeleteRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  deleteRoom(argument: _chat_DeleteRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  deleteRoom(argument: _chat_DeleteRoomRequest, callback: grpc.requestCallback<_chat_DeleteRoomResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  DeleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  deleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  deleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  deleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  deleteRoomMessages(argument: _chat_DeleteRoomMessagesRequest, callback: grpc.requestCallback<_chat_DeleteRoomMessagesResponse__Output>): grpc.ClientUnaryCall;
  
  FindMessageById(argument: _chat_FindMessageByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  FindMessageById(argument: _chat_FindMessageByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  FindMessageById(argument: _chat_FindMessageByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  FindMessageById(argument: _chat_FindMessageByIdRequest, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  findMessageById(argument: _chat_FindMessageByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  findMessageById(argument: _chat_FindMessageByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  findMessageById(argument: _chat_FindMessageByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  findMessageById(argument: _chat_FindMessageByIdRequest, callback: grpc.requestCallback<_chat_FindMessageByIdResponse__Output>): grpc.ClientUnaryCall;
  
  FindMessageByUser(argument: _chat_FindMessageByUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  FindMessageByUser(argument: _chat_FindMessageByUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  FindMessageByUser(argument: _chat_FindMessageByUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  FindMessageByUser(argument: _chat_FindMessageByUserRequest, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  findMessageByUser(argument: _chat_FindMessageByUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  findMessageByUser(argument: _chat_FindMessageByUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  findMessageByUser(argument: _chat_FindMessageByUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  findMessageByUser(argument: _chat_FindMessageByUserRequest, callback: grpc.requestCallback<_chat_FindMessageByUserResponse__Output>): grpc.ClientUnaryCall;
  
  FindRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  findRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  findRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  findRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  findRoomByRoomId(argument: _chat_FindRoomByRoomIdRequest, callback: grpc.requestCallback<_chat_FindRoomByRoomIdResponse__Output>): grpc.ClientUnaryCall;
  
  FindUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  FindUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  FindUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  FindUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  findUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  findUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  findUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  findUsersChatLaseMessages(argument: _chat_FindUsersChatLaseMessagesRequest, callback: grpc.requestCallback<_chat_FindUsersChatLaseMessagesResponse__Output>): grpc.ClientUnaryCall;
  
  GetMessages(argument: _chat_GetMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_GetMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_GetMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_GetMessagesRequest, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_GetMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_GetMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_GetMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_GetMessagesRequest, callback: grpc.requestCallback<_chat_GetMessagesResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateRoom(argument: _chat_UpdateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  UpdateRoom(argument: _chat_UpdateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  UpdateRoom(argument: _chat_UpdateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  UpdateRoom(argument: _chat_UpdateRoomRequest, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  updateRoom(argument: _chat_UpdateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  updateRoom(argument: _chat_UpdateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  updateRoom(argument: _chat_UpdateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  updateRoom(argument: _chat_UpdateRoomRequest, callback: grpc.requestCallback<_chat_UpdateRoomResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateMessage: grpc.handleUnaryCall<_chat_CreateMessageRequest__Output, _chat_CreateMessageResponse>;
  
  CreateRoom: grpc.handleUnaryCall<_chat_CreateRoomRequest__Output, _chat_CreateRoomResponse>;
  
  DeleteMessage: grpc.handleUnaryCall<_chat_DeleteMessageRequest__Output, _chat_DeleteMessageResponse>;
  
  DeleteRoom: grpc.handleUnaryCall<_chat_DeleteRoomRequest__Output, _chat_DeleteRoomResponse>;
  
  DeleteRoomMessages: grpc.handleUnaryCall<_chat_DeleteRoomMessagesRequest__Output, _chat_DeleteRoomMessagesResponse>;
  
  FindMessageById: grpc.handleUnaryCall<_chat_FindMessageByIdRequest__Output, _chat_FindMessageByIdResponse>;
  
  FindMessageByUser: grpc.handleUnaryCall<_chat_FindMessageByUserRequest__Output, _chat_FindMessageByUserResponse>;
  
  FindRoomByRoomId: grpc.handleUnaryCall<_chat_FindRoomByRoomIdRequest__Output, _chat_FindRoomByRoomIdResponse>;
  
  FindUsersChatLaseMessages: grpc.handleUnaryCall<_chat_FindUsersChatLaseMessagesRequest__Output, _chat_FindUsersChatLaseMessagesResponse>;
  
  GetMessages: grpc.handleUnaryCall<_chat_GetMessagesRequest__Output, _chat_GetMessagesResponse>;
  
  UpdateMessage: grpc.handleUnaryCall<_chat_UpdateMessageRequest__Output, _chat_UpdateMessageResponse>;
  
  UpdateRoom: grpc.handleUnaryCall<_chat_UpdateRoomRequest__Output, _chat_UpdateRoomResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  CreateMessage: MethodDefinition<_chat_CreateMessageRequest, _chat_CreateMessageResponse, _chat_CreateMessageRequest__Output, _chat_CreateMessageResponse__Output>
  CreateRoom: MethodDefinition<_chat_CreateRoomRequest, _chat_CreateRoomResponse, _chat_CreateRoomRequest__Output, _chat_CreateRoomResponse__Output>
  DeleteMessage: MethodDefinition<_chat_DeleteMessageRequest, _chat_DeleteMessageResponse, _chat_DeleteMessageRequest__Output, _chat_DeleteMessageResponse__Output>
  DeleteRoom: MethodDefinition<_chat_DeleteRoomRequest, _chat_DeleteRoomResponse, _chat_DeleteRoomRequest__Output, _chat_DeleteRoomResponse__Output>
  DeleteRoomMessages: MethodDefinition<_chat_DeleteRoomMessagesRequest, _chat_DeleteRoomMessagesResponse, _chat_DeleteRoomMessagesRequest__Output, _chat_DeleteRoomMessagesResponse__Output>
  FindMessageById: MethodDefinition<_chat_FindMessageByIdRequest, _chat_FindMessageByIdResponse, _chat_FindMessageByIdRequest__Output, _chat_FindMessageByIdResponse__Output>
  FindMessageByUser: MethodDefinition<_chat_FindMessageByUserRequest, _chat_FindMessageByUserResponse, _chat_FindMessageByUserRequest__Output, _chat_FindMessageByUserResponse__Output>
  FindRoomByRoomId: MethodDefinition<_chat_FindRoomByRoomIdRequest, _chat_FindRoomByRoomIdResponse, _chat_FindRoomByRoomIdRequest__Output, _chat_FindRoomByRoomIdResponse__Output>
  FindUsersChatLaseMessages: MethodDefinition<_chat_FindUsersChatLaseMessagesRequest, _chat_FindUsersChatLaseMessagesResponse, _chat_FindUsersChatLaseMessagesRequest__Output, _chat_FindUsersChatLaseMessagesResponse__Output>
  GetMessages: MethodDefinition<_chat_GetMessagesRequest, _chat_GetMessagesResponse, _chat_GetMessagesRequest__Output, _chat_GetMessagesResponse__Output>
  UpdateMessage: MethodDefinition<_chat_UpdateMessageRequest, _chat_UpdateMessageResponse, _chat_UpdateMessageRequest__Output, _chat_UpdateMessageResponse__Output>
  UpdateRoom: MethodDefinition<_chat_UpdateRoomRequest, _chat_UpdateRoomResponse, _chat_UpdateRoomRequest__Output, _chat_UpdateRoomResponse__Output>
}
