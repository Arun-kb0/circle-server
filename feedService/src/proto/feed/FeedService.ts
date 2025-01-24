// Original file: src/proto/feed.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetCommentRequest as _feed_GetCommentRequest, GetCommentRequest__Output as _feed_GetCommentRequest__Output } from '../feed/GetCommentRequest';
import type { GetCommentResponse as _feed_GetCommentResponse, GetCommentResponse__Output as _feed_GetCommentResponse__Output } from '../feed/GetCommentResponse';
import type { GetGlobalFeedRequest as _feed_GetGlobalFeedRequest, GetGlobalFeedRequest__Output as _feed_GetGlobalFeedRequest__Output } from '../feed/GetGlobalFeedRequest';
import type { GetGlobalFeedResponse as _feed_GetGlobalFeedResponse, GetGlobalFeedResponse__Output as _feed_GetGlobalFeedResponse__Output } from '../feed/GetGlobalFeedResponse';
import type { GetPostRequest as _feed_GetPostRequest, GetPostRequest__Output as _feed_GetPostRequest__Output } from '../feed/GetPostRequest';
import type { GetPostResponse as _feed_GetPostResponse, GetPostResponse__Output as _feed_GetPostResponse__Output } from '../feed/GetPostResponse';
import type { GetUserCreatedPostsRequest as _feed_GetUserCreatedPostsRequest, GetUserCreatedPostsRequest__Output as _feed_GetUserCreatedPostsRequest__Output } from '../feed/GetUserCreatedPostsRequest';
import type { GetUserCreatedPostsResponse as _feed_GetUserCreatedPostsResponse, GetUserCreatedPostsResponse__Output as _feed_GetUserCreatedPostsResponse__Output } from '../feed/GetUserCreatedPostsResponse';
import type { GetUserFeedRequest as _feed_GetUserFeedRequest, GetUserFeedRequest__Output as _feed_GetUserFeedRequest__Output } from '../feed/GetUserFeedRequest';
import type { GetUserFeedResponse as _feed_GetUserFeedResponse, GetUserFeedResponse__Output as _feed_GetUserFeedResponse__Output } from '../feed/GetUserFeedResponse';
import type { SearchPostRequest as _feed_SearchPostRequest, SearchPostRequest__Output as _feed_SearchPostRequest__Output } from '../feed/SearchPostRequest';
import type { SearchPostResponse as _feed_SearchPostResponse, SearchPostResponse__Output as _feed_SearchPostResponse__Output } from '../feed/SearchPostResponse';

export interface FeedServiceClient extends grpc.Client {
  GetComment(argument: _feed_GetCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  GetComment(argument: _feed_GetCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  GetComment(argument: _feed_GetCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  GetComment(argument: _feed_GetCommentRequest, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  getComment(argument: _feed_GetCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  getComment(argument: _feed_GetCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  getComment(argument: _feed_GetCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  getComment(argument: _feed_GetCommentRequest, callback: grpc.requestCallback<_feed_GetCommentResponse__Output>): grpc.ClientUnaryCall;
  
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  
  GetPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  GetUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  GetUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  GetUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  getUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  getUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  getUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  getUserCreatedPosts(argument: _feed_GetUserCreatedPostsRequest, callback: grpc.requestCallback<_feed_GetUserCreatedPostsResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserFeed(argument: _feed_GetUserFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _feed_GetUserFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _feed_GetUserFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _feed_GetUserFeedRequest, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _feed_GetUserFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _feed_GetUserFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _feed_GetUserFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _feed_GetUserFeedRequest, callback: grpc.requestCallback<_feed_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  
  SearchPost(argument: _feed_SearchPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  SearchPost(argument: _feed_SearchPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  SearchPost(argument: _feed_SearchPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  SearchPost(argument: _feed_SearchPostRequest, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  searchPost(argument: _feed_SearchPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  searchPost(argument: _feed_SearchPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  searchPost(argument: _feed_SearchPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  searchPost(argument: _feed_SearchPostRequest, callback: grpc.requestCallback<_feed_SearchPostResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface FeedServiceHandlers extends grpc.UntypedServiceImplementation {
  GetComment: grpc.handleUnaryCall<_feed_GetCommentRequest__Output, _feed_GetCommentResponse>;
  
  GetGlobalFeed: grpc.handleUnaryCall<_feed_GetGlobalFeedRequest__Output, _feed_GetGlobalFeedResponse>;
  
  GetPost: grpc.handleUnaryCall<_feed_GetPostRequest__Output, _feed_GetPostResponse>;
  
  GetUserCreatedPosts: grpc.handleUnaryCall<_feed_GetUserCreatedPostsRequest__Output, _feed_GetUserCreatedPostsResponse>;
  
  GetUserFeed: grpc.handleUnaryCall<_feed_GetUserFeedRequest__Output, _feed_GetUserFeedResponse>;
  
  SearchPost: grpc.handleUnaryCall<_feed_SearchPostRequest__Output, _feed_SearchPostResponse>;
  
}

export interface FeedServiceDefinition extends grpc.ServiceDefinition {
  GetComment: MethodDefinition<_feed_GetCommentRequest, _feed_GetCommentResponse, _feed_GetCommentRequest__Output, _feed_GetCommentResponse__Output>
  GetGlobalFeed: MethodDefinition<_feed_GetGlobalFeedRequest, _feed_GetGlobalFeedResponse, _feed_GetGlobalFeedRequest__Output, _feed_GetGlobalFeedResponse__Output>
  GetPost: MethodDefinition<_feed_GetPostRequest, _feed_GetPostResponse, _feed_GetPostRequest__Output, _feed_GetPostResponse__Output>
  GetUserCreatedPosts: MethodDefinition<_feed_GetUserCreatedPostsRequest, _feed_GetUserCreatedPostsResponse, _feed_GetUserCreatedPostsRequest__Output, _feed_GetUserCreatedPostsResponse__Output>
  GetUserFeed: MethodDefinition<_feed_GetUserFeedRequest, _feed_GetUserFeedResponse, _feed_GetUserFeedRequest__Output, _feed_GetUserFeedResponse__Output>
  SearchPost: MethodDefinition<_feed_SearchPostRequest, _feed_SearchPostResponse, _feed_SearchPostRequest__Output, _feed_SearchPostResponse__Output>
}
