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
import { GetCommentChildrenRequest__Output } from '../proto/feed/GetCommentChildrenRequest'
import { GetCommentChildrenResponse } from '../proto/feed/GetCommentChildrenResponse'
import { GetPopularPostsRequest__Output } from '../proto/feed/GetPopularPostsRequest'
import { GetPopularPostsResponse } from '../proto/feed/GetPopularPostsResponse'
import { GetTotalPostsCountRequest__Output } from '../proto/feed/GetTotalPostsCountRequest'
import { GetTotalPostsCountResponse } from '../proto/feed/GetTotalPostsCountResponse'
import { GetTotalCommentsCountRequest__Output } from '../proto/feed/GetTotalCommentsCountRequest'
import { GetTotalCommentsCountResponse } from '../proto/feed/GetTotalCommentsCountResponse'
import { GetTotalLikesCountRequest__Output } from '../proto/feed/GetTotalLikesCountRequest'
import { GetTotalLikesCountResponse } from '../proto/feed/GetTotalLikesCountResponse'
import { GetFeedCountsRequest__Output } from '../proto/feed/GetFeedCountsRequest'
import { GetFeedCountsResponse } from '../proto/feed/GetFeedCountsResponse'
import { GetPostsCountByDateRequest__Output } from '../proto/feed/GetPostsCountByDateRequest'
import { GetPostsCountByDateResponse } from '../proto/feed/GetPostsCountByDateResponse'
import { GetSingleCommentRequest__Output } from '../proto/feed/GetSingleCommentRequest'
import { GetSingleCommentResponse } from '../proto/feed/GetSingleCommentResponse'
import { GetUserSavedPostsRequest__Output } from '../proto/feed/GetUserSavedPostsRequest'
import { GetUserSavedPostsResponse } from '../proto/feed/GetUserSavedPostsResponse'
import { GetAllReportsRequest__Output } from '../proto/feed/GetAllReportsRequest'
import { GetAllReportsResponse } from '../proto/feed/GetAllReportsResponse'


export type GetGlobalFeedHandler = grpc.handleUnaryCall<GetGlobalFeedRequest__Output, GetGlobalFeedResponse>
export type GetUserFeedHandler = grpc.handleUnaryCall<GetUserFeedRequest__Output, GetUserFeedResponse>
export type GetPostHandler = grpc.handleUnaryCall<GetPostRequest__Output, GetPostResponse>
export type SearchPostHandler = grpc.handleUnaryCall<SearchPostRequest__Output, SearchPostResponse>
export type GetCommentsHandler = grpc.handleUnaryCall<GetCommentRequest__Output, GetCommentResponse>
export type GetCommentChildrenHandler = grpc.handleUnaryCall<GetCommentChildrenRequest__Output, GetCommentChildrenResponse>
export type GetUserCreatedPostsHandler = grpc.handleUnaryCall<GetUserCreatedPostsRequest__Output, GetUserCreatedPostsResponse>

export type GetPopularPostsHandler = grpc.handleUnaryCall<GetPopularPostsRequest__Output, GetPopularPostsResponse>
export type GetTotalPostsCountHandler = grpc.handleUnaryCall<GetTotalPostsCountRequest__Output, GetTotalPostsCountResponse>
export type GetTotalCommentsCountHandler = grpc.handleUnaryCall<GetTotalCommentsCountRequest__Output, GetTotalCommentsCountResponse>
export type GetTotalLikesCountHandler = grpc.handleUnaryCall<GetTotalLikesCountRequest__Output, GetTotalLikesCountResponse>
export type GetFeedCountsHandler = grpc.handleUnaryCall<GetFeedCountsRequest__Output, GetFeedCountsResponse>
export type GetPostsCountByDateHandler = grpc.handleUnaryCall<GetPostsCountByDateRequest__Output, GetPostsCountByDateResponse>

export type GetSingleCommentHandler = grpc.handleUnaryCall<GetSingleCommentRequest__Output, GetSingleCommentResponse>

export type GetUserSavedPostsHandler = grpc.handleUnaryCall<GetUserSavedPostsRequest__Output, GetUserSavedPostsResponse>
export type GetAllReportsHandler = grpc.handleUnaryCall<GetAllReportsRequest__Output, GetAllReportsResponse>

interface IFeedController {

  getGlobalFeed: GetGlobalFeedHandler
  getUserFeed: GetUserFeedHandler
  getPost: GetPostHandler
  searchPost: SearchPostHandler
  getUserCreatedPosts: GetUserCreatedPostsHandler

  getComments: GetCommentsHandler
  getCommentChildren: GetCommentChildrenHandler

  getPopularPosts: GetPopularPostsHandler
  getTotalPostsCount: GetTotalPostsCountHandler
  getTotalCommentsCount: GetTotalCommentsCountHandler
  getTotalLikesCount: GetTotalLikesCountHandler
  getFeedCounts: GetFeedCountsHandler
  getPostsCountByDate: GetPostsCountByDateHandler

  getSingleComment: GetSingleCommentHandler

  getUserSavedPosts: GetUserSavedPostsHandler
  getAllReports: GetAllReportsHandler
}

export default IFeedController