import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { FeedServiceClient as _feed_FeedServiceClient, FeedServiceDefinition as _feed_FeedServiceDefinition } from './feed/FeedService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  feed: {
    Comment: MessageTypeDefinition
    CommentEnums: MessageTypeDefinition
    FeedService: SubtypeConstructor<typeof grpc.Client, _feed_FeedServiceClient> & { service: _feed_FeedServiceDefinition }
    GetCommentRequest: MessageTypeDefinition
    GetCommentResponse: MessageTypeDefinition
    GetGlobalFeedRequest: MessageTypeDefinition
    GetGlobalFeedResponse: MessageTypeDefinition
    GetPostRequest: MessageTypeDefinition
    GetPostResponse: MessageTypeDefinition
    GetUserCreatedPostsRequest: MessageTypeDefinition
    GetUserCreatedPostsResponse: MessageTypeDefinition
    GetUserFeedRequest: MessageTypeDefinition
    GetUserFeedResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    Like: MessageTypeDefinition
    Media: EnumTypeDefinition
    Post: MessageTypeDefinition
    SearchPostRequest: MessageTypeDefinition
    SearchPostResponse: MessageTypeDefinition
    Status: EnumTypeDefinition
  }
}

