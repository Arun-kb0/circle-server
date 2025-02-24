// Original file: src/proto/feed.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetCommentChildrenRequest as _feed_GetCommentChildrenRequest, GetCommentChildrenRequest__Output as _feed_GetCommentChildrenRequest__Output } from '../feed/GetCommentChildrenRequest';
import type { GetCommentChildrenResponse as _feed_GetCommentChildrenResponse, GetCommentChildrenResponse__Output as _feed_GetCommentChildrenResponse__Output } from '../feed/GetCommentChildrenResponse';
import type { GetCommentRequest as _feed_GetCommentRequest, GetCommentRequest__Output as _feed_GetCommentRequest__Output } from '../feed/GetCommentRequest';
import type { GetCommentResponse as _feed_GetCommentResponse, GetCommentResponse__Output as _feed_GetCommentResponse__Output } from '../feed/GetCommentResponse';
import type { GetFeedCountsRequest as _feed_GetFeedCountsRequest, GetFeedCountsRequest__Output as _feed_GetFeedCountsRequest__Output } from '../feed/GetFeedCountsRequest';
import type { GetFeedCountsResponse as _feed_GetFeedCountsResponse, GetFeedCountsResponse__Output as _feed_GetFeedCountsResponse__Output } from '../feed/GetFeedCountsResponse';
import type { GetGlobalFeedRequest as _feed_GetGlobalFeedRequest, GetGlobalFeedRequest__Output as _feed_GetGlobalFeedRequest__Output } from '../feed/GetGlobalFeedRequest';
import type { GetGlobalFeedResponse as _feed_GetGlobalFeedResponse, GetGlobalFeedResponse__Output as _feed_GetGlobalFeedResponse__Output } from '../feed/GetGlobalFeedResponse';
import type { GetPopularPostsRequest as _feed_GetPopularPostsRequest, GetPopularPostsRequest__Output as _feed_GetPopularPostsRequest__Output } from '../feed/GetPopularPostsRequest';
import type { GetPopularPostsResponse as _feed_GetPopularPostsResponse, GetPopularPostsResponse__Output as _feed_GetPopularPostsResponse__Output } from '../feed/GetPopularPostsResponse';
import type { GetPostRequest as _feed_GetPostRequest, GetPostRequest__Output as _feed_GetPostRequest__Output } from '../feed/GetPostRequest';
import type { GetPostResponse as _feed_GetPostResponse, GetPostResponse__Output as _feed_GetPostResponse__Output } from '../feed/GetPostResponse';
import type { GetTotalCommentsCountRequest as _feed_GetTotalCommentsCountRequest, GetTotalCommentsCountRequest__Output as _feed_GetTotalCommentsCountRequest__Output } from '../feed/GetTotalCommentsCountRequest';
import type { GetTotalCommentsCountResponse as _feed_GetTotalCommentsCountResponse, GetTotalCommentsCountResponse__Output as _feed_GetTotalCommentsCountResponse__Output } from '../feed/GetTotalCommentsCountResponse';
import type { GetTotalLikesCountRequest as _feed_GetTotalLikesCountRequest, GetTotalLikesCountRequest__Output as _feed_GetTotalLikesCountRequest__Output } from '../feed/GetTotalLikesCountRequest';
import type { GetTotalLikesCountResponse as _feed_GetTotalLikesCountResponse, GetTotalLikesCountResponse__Output as _feed_GetTotalLikesCountResponse__Output } from '../feed/GetTotalLikesCountResponse';
import type { GetTotalPostsCountRequest as _feed_GetTotalPostsCountRequest, GetTotalPostsCountRequest__Output as _feed_GetTotalPostsCountRequest__Output } from '../feed/GetTotalPostsCountRequest';
import type { GetTotalPostsCountResponse as _feed_GetTotalPostsCountResponse, GetTotalPostsCountResponse__Output as _feed_GetTotalPostsCountResponse__Output } from '../feed/GetTotalPostsCountResponse';
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
  
  GetCommentChildren(argument: _feed_GetCommentChildrenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  GetCommentChildren(argument: _feed_GetCommentChildrenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  GetCommentChildren(argument: _feed_GetCommentChildrenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  GetCommentChildren(argument: _feed_GetCommentChildrenRequest, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  getCommentChildren(argument: _feed_GetCommentChildrenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  getCommentChildren(argument: _feed_GetCommentChildrenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  getCommentChildren(argument: _feed_GetCommentChildrenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  getCommentChildren(argument: _feed_GetCommentChildrenRequest, callback: grpc.requestCallback<_feed_GetCommentChildrenResponse__Output>): grpc.ClientUnaryCall;
  
  GetFeedCounts(argument: _feed_GetFeedCountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  GetFeedCounts(argument: _feed_GetFeedCountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  GetFeedCounts(argument: _feed_GetFeedCountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  GetFeedCounts(argument: _feed_GetFeedCountsRequest, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  getFeedCounts(argument: _feed_GetFeedCountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  getFeedCounts(argument: _feed_GetFeedCountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  getFeedCounts(argument: _feed_GetFeedCountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  getFeedCounts(argument: _feed_GetFeedCountsRequest, callback: grpc.requestCallback<_feed_GetFeedCountsResponse__Output>): grpc.ClientUnaryCall;
  
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _feed_GetGlobalFeedRequest, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _feed_GetGlobalFeedRequest, callback: grpc.requestCallback<_feed_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  
  GetPopularPosts(argument: _feed_GetPopularPostsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  GetPopularPosts(argument: _feed_GetPopularPostsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  GetPopularPosts(argument: _feed_GetPopularPostsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  GetPopularPosts(argument: _feed_GetPopularPostsRequest, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  getPopularPosts(argument: _feed_GetPopularPostsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  getPopularPosts(argument: _feed_GetPopularPostsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  getPopularPosts(argument: _feed_GetPopularPostsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  getPopularPosts(argument: _feed_GetPopularPostsRequest, callback: grpc.requestCallback<_feed_GetPopularPostsResponse__Output>): grpc.ClientUnaryCall;
  
  GetPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _feed_GetPostRequest, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _feed_GetPostRequest, callback: grpc.requestCallback<_feed_GetPostResponse__Output>): grpc.ClientUnaryCall;
  
  GetTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalCommentsCount(argument: _feed_GetTotalCommentsCountRequest, callback: grpc.requestCallback<_feed_GetTotalCommentsCountResponse__Output>): grpc.ClientUnaryCall;
  
  GetTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalLikesCount(argument: _feed_GetTotalLikesCountRequest, callback: grpc.requestCallback<_feed_GetTotalLikesCountResponse__Output>): grpc.ClientUnaryCall;
  
  GetTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  GetTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  getTotalPostsCount(argument: _feed_GetTotalPostsCountRequest, callback: grpc.requestCallback<_feed_GetTotalPostsCountResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  GetCommentChildren: grpc.handleUnaryCall<_feed_GetCommentChildrenRequest__Output, _feed_GetCommentChildrenResponse>;
  
  GetFeedCounts: grpc.handleUnaryCall<_feed_GetFeedCountsRequest__Output, _feed_GetFeedCountsResponse>;
  
  GetGlobalFeed: grpc.handleUnaryCall<_feed_GetGlobalFeedRequest__Output, _feed_GetGlobalFeedResponse>;
  
  GetPopularPosts: grpc.handleUnaryCall<_feed_GetPopularPostsRequest__Output, _feed_GetPopularPostsResponse>;
  
  GetPost: grpc.handleUnaryCall<_feed_GetPostRequest__Output, _feed_GetPostResponse>;
  
  GetTotalCommentsCount: grpc.handleUnaryCall<_feed_GetTotalCommentsCountRequest__Output, _feed_GetTotalCommentsCountResponse>;
  
  GetTotalLikesCount: grpc.handleUnaryCall<_feed_GetTotalLikesCountRequest__Output, _feed_GetTotalLikesCountResponse>;
  
  GetTotalPostsCount: grpc.handleUnaryCall<_feed_GetTotalPostsCountRequest__Output, _feed_GetTotalPostsCountResponse>;
  
  GetUserCreatedPosts: grpc.handleUnaryCall<_feed_GetUserCreatedPostsRequest__Output, _feed_GetUserCreatedPostsResponse>;
  
  GetUserFeed: grpc.handleUnaryCall<_feed_GetUserFeedRequest__Output, _feed_GetUserFeedResponse>;
  
  SearchPost: grpc.handleUnaryCall<_feed_SearchPostRequest__Output, _feed_SearchPostResponse>;
  
}

export interface FeedServiceDefinition extends grpc.ServiceDefinition {
  GetComment: MethodDefinition<_feed_GetCommentRequest, _feed_GetCommentResponse, _feed_GetCommentRequest__Output, _feed_GetCommentResponse__Output>
  GetCommentChildren: MethodDefinition<_feed_GetCommentChildrenRequest, _feed_GetCommentChildrenResponse, _feed_GetCommentChildrenRequest__Output, _feed_GetCommentChildrenResponse__Output>
  GetFeedCounts: MethodDefinition<_feed_GetFeedCountsRequest, _feed_GetFeedCountsResponse, _feed_GetFeedCountsRequest__Output, _feed_GetFeedCountsResponse__Output>
  GetGlobalFeed: MethodDefinition<_feed_GetGlobalFeedRequest, _feed_GetGlobalFeedResponse, _feed_GetGlobalFeedRequest__Output, _feed_GetGlobalFeedResponse__Output>
  GetPopularPosts: MethodDefinition<_feed_GetPopularPostsRequest, _feed_GetPopularPostsResponse, _feed_GetPopularPostsRequest__Output, _feed_GetPopularPostsResponse__Output>
  GetPost: MethodDefinition<_feed_GetPostRequest, _feed_GetPostResponse, _feed_GetPostRequest__Output, _feed_GetPostResponse__Output>
  GetTotalCommentsCount: MethodDefinition<_feed_GetTotalCommentsCountRequest, _feed_GetTotalCommentsCountResponse, _feed_GetTotalCommentsCountRequest__Output, _feed_GetTotalCommentsCountResponse__Output>
  GetTotalLikesCount: MethodDefinition<_feed_GetTotalLikesCountRequest, _feed_GetTotalLikesCountResponse, _feed_GetTotalLikesCountRequest__Output, _feed_GetTotalLikesCountResponse__Output>
  GetTotalPostsCount: MethodDefinition<_feed_GetTotalPostsCountRequest, _feed_GetTotalPostsCountResponse, _feed_GetTotalPostsCountRequest__Output, _feed_GetTotalPostsCountResponse__Output>
  GetUserCreatedPosts: MethodDefinition<_feed_GetUserCreatedPostsRequest, _feed_GetUserCreatedPostsResponse, _feed_GetUserCreatedPostsRequest__Output, _feed_GetUserCreatedPostsResponse__Output>
  GetUserFeed: MethodDefinition<_feed_GetUserFeedRequest, _feed_GetUserFeedResponse, _feed_GetUserFeedRequest__Output, _feed_GetUserFeedResponse__Output>
  SearchPost: MethodDefinition<_feed_SearchPostRequest, _feed_SearchPostResponse, _feed_SearchPostRequest__Output, _feed_SearchPostResponse__Output>
}
