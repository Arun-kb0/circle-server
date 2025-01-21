// Original file: src/proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateMessageRequest as _chat_CreateMessageRequest, CreateMessageRequest__Output as _chat_CreateMessageRequest__Output } from '../chat/CreateMessageRequest';
import type { CreateMessageResponse as _chat_CreateMessageResponse, CreateMessageResponse__Output as _chat_CreateMessageResponse__Output } from '../chat/CreateMessageResponse';
import type { DeleteMessageRequest as _chat_DeleteMessageRequest, DeleteMessageRequest__Output as _chat_DeleteMessageRequest__Output } from '../chat/DeleteMessageRequest';
import type { DeleteMessageResponse as _chat_DeleteMessageResponse, DeleteMessageResponse__Output as _chat_DeleteMessageResponse__Output } from '../chat/DeleteMessageResponse';
import type { FindMessageByIdRequest as _chat_FindMessageByIdRequest, FindMessageByIdRequest__Output as _chat_FindMessageByIdRequest__Output } from '../chat/FindMessageByIdRequest';
import type { FindMessageByIdResponse as _chat_FindMessageByIdResponse, FindMessageByIdResponse__Output as _chat_FindMessageByIdResponse__Output } from '../chat/FindMessageByIdResponse';
import type { FindMessageByUserRequest as _chat_FindMessageByUserRequest, FindMessageByUserRequest__Output as _chat_FindMessageByUserRequest__Output } from '../chat/FindMessageByUserRequest';
import type { FindMessageByUserResponse as _chat_FindMessageByUserResponse, FindMessageByUserResponse__Output as _chat_FindMessageByUserResponse__Output } from '../chat/FindMessageByUserResponse';
import type { UpdateMessageRequest as _chat_UpdateMessageRequest, UpdateMessageRequest__Output as _chat_UpdateMessageRequest__Output } from '../chat/UpdateMessageRequest';
import type { UpdateMessageResponse as _chat_UpdateMessageResponse, UpdateMessageResponse__Output as _chat_UpdateMessageResponse__Output } from '../chat/UpdateMessageResponse';

export interface ChatServiceClient extends grpc.Client {
  CreateMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  CreateMessage(argument: _chat_CreateMessageRequest, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  createMessage(argument: _chat_CreateMessageRequest, callback: grpc.requestCallback<_chat_CreateMessageResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_DeleteMessageResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_UpdateMessageResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateMessage: grpc.handleUnaryCall<_chat_CreateMessageRequest__Output, _chat_CreateMessageResponse>;
  
  DeleteMessage: grpc.handleUnaryCall<_chat_DeleteMessageRequest__Output, _chat_DeleteMessageResponse>;
  
  FindMessageById: grpc.handleUnaryCall<_chat_FindMessageByIdRequest__Output, _chat_FindMessageByIdResponse>;
  
  FindMessageByUser: grpc.handleUnaryCall<_chat_FindMessageByUserRequest__Output, _chat_FindMessageByUserResponse>;
  
  UpdateMessage: grpc.handleUnaryCall<_chat_UpdateMessageRequest__Output, _chat_UpdateMessageResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  CreateMessage: MethodDefinition<_chat_CreateMessageRequest, _chat_CreateMessageResponse, _chat_CreateMessageRequest__Output, _chat_CreateMessageResponse__Output>
  DeleteMessage: MethodDefinition<_chat_DeleteMessageRequest, _chat_DeleteMessageResponse, _chat_DeleteMessageRequest__Output, _chat_DeleteMessageResponse__Output>
  FindMessageById: MethodDefinition<_chat_FindMessageByIdRequest, _chat_FindMessageByIdResponse, _chat_FindMessageByIdRequest__Output, _chat_FindMessageByIdResponse__Output>
  FindMessageByUser: MethodDefinition<_chat_FindMessageByUserRequest, _chat_FindMessageByUserResponse, _chat_FindMessageByUserRequest__Output, _chat_FindMessageByUserResponse__Output>
  UpdateMessage: MethodDefinition<_chat_UpdateMessageRequest, _chat_UpdateMessageResponse, _chat_UpdateMessageRequest__Output, _chat_UpdateMessageResponse__Output>
}
