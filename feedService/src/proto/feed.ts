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
    GetAllReportsRequest: MessageTypeDefinition
    GetAllReportsResponse: MessageTypeDefinition
    GetCommentChildrenRequest: MessageTypeDefinition
    GetCommentChildrenResponse: MessageTypeDefinition
    GetCommentRequest: MessageTypeDefinition
    GetCommentResponse: MessageTypeDefinition
    GetFeedCountsRequest: MessageTypeDefinition
    GetFeedCountsResponse: MessageTypeDefinition
    GetGlobalFeedRequest: MessageTypeDefinition
    GetGlobalFeedResponse: MessageTypeDefinition
    GetPopularPostsRequest: MessageTypeDefinition
    GetPopularPostsResponse: MessageTypeDefinition
    GetPostRequest: MessageTypeDefinition
    GetPostResponse: MessageTypeDefinition
    GetPostsCountByDateRequest: MessageTypeDefinition
    GetPostsCountByDateResponse: MessageTypeDefinition
    GetSingleCommentRequest: MessageTypeDefinition
    GetSingleCommentResponse: MessageTypeDefinition
    GetTotalCommentsCountRequest: MessageTypeDefinition
    GetTotalCommentsCountResponse: MessageTypeDefinition
    GetTotalLikesCountRequest: MessageTypeDefinition
    GetTotalLikesCountResponse: MessageTypeDefinition
    GetTotalPostsCountRequest: MessageTypeDefinition
    GetTotalPostsCountResponse: MessageTypeDefinition
    GetUserCreatedPostsRequest: MessageTypeDefinition
    GetUserCreatedPostsResponse: MessageTypeDefinition
    GetUserFeedRequest: MessageTypeDefinition
    GetUserFeedResponse: MessageTypeDefinition
    GetUserSavedPostsRequest: MessageTypeDefinition
    GetUserSavedPostsResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    Like: MessageTypeDefinition
    Media: EnumTypeDefinition
    Post: MessageTypeDefinition
    PostsCountArray: MessageTypeDefinition
    Report: MessageTypeDefinition
    ReportEnums: MessageTypeDefinition
    Saved: MessageTypeDefinition
    SearchPostRequest: MessageTypeDefinition
    SearchPostResponse: MessageTypeDefinition
    Status: EnumTypeDefinition
  }
}

