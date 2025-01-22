import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _chat_ChatServiceClient, ChatServiceDefinition as _chat_ChatServiceDefinition } from './chat/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    ChatRoom: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chat_ChatServiceClient> & { service: _chat_ChatServiceDefinition }
    CreateMessageRequest: MessageTypeDefinition
    CreateMessageResponse: MessageTypeDefinition
    CreateRoomRequest: MessageTypeDefinition
    CreateRoomResponse: MessageTypeDefinition
    DeleteMessageRequest: MessageTypeDefinition
    DeleteMessageResponse: MessageTypeDefinition
    DeleteRoomRequest: MessageTypeDefinition
    DeleteRoomResponse: MessageTypeDefinition
    FindMessageByIdRequest: MessageTypeDefinition
    FindMessageByIdResponse: MessageTypeDefinition
    FindMessageByUserRequest: MessageTypeDefinition
    FindMessageByUserResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    MessageEnums: MessageTypeDefinition
    MessageRoom: MessageTypeDefinition
    UpdateMessageRequest: MessageTypeDefinition
    UpdateMessageResponse: MessageTypeDefinition
    UpdateRoomRequest: MessageTypeDefinition
    UpdateRoomResponse: MessageTypeDefinition
    findRoomByRoomIdRequest: MessageTypeDefinition
    findRoomByRoomIdResponse: MessageTypeDefinition
  }
}

