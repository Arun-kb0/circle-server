import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _chat_ChatServiceClient, ChatServiceDefinition as _chat_ChatServiceDefinition } from './chat/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    Chat: MessageTypeDefinition
    ChatEnums: MessageTypeDefinition
    ChatRoom: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chat_ChatServiceClient> & { service: _chat_ChatServiceDefinition }
    CreateMessageRequest: MessageTypeDefinition
    CreateMessageResponse: MessageTypeDefinition
    DeleteMessageRequest: MessageTypeDefinition
    DeleteMessageResponse: MessageTypeDefinition
    FindMessageByIdRequest: MessageTypeDefinition
    FindMessageByIdResponse: MessageTypeDefinition
    FindMessageByUserRequest: MessageTypeDefinition
    FindMessageByUserResponse: MessageTypeDefinition
    UpdateMessageRequest: MessageTypeDefinition
    UpdateMessageResponse: MessageTypeDefinition
  }
}

