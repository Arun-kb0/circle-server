import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostServiceClient as _post_PostServiceClient, PostServiceDefinition as _post_PostServiceDefinition } from './post/PostService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  post: {
    Comment: MessageTypeDefinition
    CommentPostRequest: MessageTypeDefinition
    CommentPostResponse: MessageTypeDefinition
    CreatePostRequest: MessageTypeDefinition
    CreatePostResponse: MessageTypeDefinition
    DeletePostRequest: MessageTypeDefinition
    DeletePostResponse: MessageTypeDefinition
    GetGlobalFeedRequest: MessageTypeDefinition
    GetGlobalFeedResponse: MessageTypeDefinition
    GetUserFeedRequest: MessageTypeDefinition
    GetUserFeedResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    LikePostRequest: MessageTypeDefinition
    LikePostResponse: MessageTypeDefinition
    Post: MessageTypeDefinition
    PostService: SubtypeConstructor<typeof grpc.Client, _post_PostServiceClient> & { service: _post_PostServiceDefinition }
    Status: EnumTypeDefinition
    UpdatePostRequest: MessageTypeDefinition
    UpdatePostResponse: MessageTypeDefinition
  }
}

