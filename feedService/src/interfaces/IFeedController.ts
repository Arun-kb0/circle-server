import * as grpc from '@grpc/grpc-js'
import { GetGlobalFeedRequest__Output } from '../proto/feed/GetGlobalFeedRequest'
import { GetGlobalFeedResponse } from '../proto/feed/GetGlobalFeedResponse'
import { GetUserFeedRequest__Output } from '../proto/feed/GetUserFeedRequest'
import { GetUserFeedResponse } from '../proto/feed/GetUserFeedResponse'
import { GetCommentResponse } from '../proto/feed/GetCommentResponse'
import { GetCommentRequest__Output } from '../proto/feed/GetCommentRequest'
import { GetPostRequest__Output } from '../proto/feed/GetPostRequest'
import { GetPostResponse } from '../proto/feed/GetPostResponse'
import { SearchPostRequest__Output } from '../proto/feed/SearchPostRequest'
import { SearchPostResponse } from '../proto/feed/SearchPostResponse'
import { GetUserCreatedPostsRequest__Output } from '../proto/feed/GetUserCreatedPostsRequest'
import { GetUserCreatedPostsResponse } from '../proto/feed/GetUserCreatedPostsResponse'

export type GetGlobalFeedHandler = grpc.handleUnaryCall<GetGlobalFeedRequest__Output, GetGlobalFeedResponse>
export type GetUserFeedHandler = grpc.handleUnaryCall<GetUserFeedRequest__Output, GetUserFeedResponse>
export type GetPostHandler = grpc.handleUnaryCall<GetPostRequest__Output, GetPostResponse>
export type SearchPostHandler = grpc.handleUnaryCall<SearchPostRequest__Output, SearchPostResponse>
export type GetCommentsHandler = grpc.handleUnaryCall<GetCommentRequest__Output, GetCommentResponse>
export type GetUserCreatedPostsHandler = grpc.handleUnaryCall<GetUserCreatedPostsRequest__Output, GetUserCreatedPostsResponse>


interface IFeedController {

  getGlobalFeed: GetGlobalFeedHandler
  getUserFeed: GetUserFeedHandler
  getPost: GetPostHandler
  searchPost: SearchPostHandler
  getUserCreatedPosts: GetUserCreatedPostsHandler

  getComments: GetCommentsHandler
}

export default IFeedController