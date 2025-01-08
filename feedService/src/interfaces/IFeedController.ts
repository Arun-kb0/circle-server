import * as grpc from '@grpc/grpc-js'
import { GetGlobalFeedRequest__Output } from '../proto/feed/GetGlobalFeedRequest'
import { GetGlobalFeedResponse } from '../proto/feed/GetGlobalFeedResponse'
import { GetUserFeedRequest__Output } from '../proto/feed/GetUserFeedRequest'
import { GetUserFeedResponse } from '../proto/feed/GetUserFeedResponse'
import { GetCommentResponse } from '../proto/feed/GetCommentResponse'
import { GetCommentRequest__Output } from '../proto/feed/GetCommentRequest'
import { GetPostRequest__Output } from '../proto/feed/GetPostRequest'
import { GetPostResponse } from '../proto/feed/GetPostResponse'


type GetGlobalFeedHandler = grpc.handleUnaryCall<GetGlobalFeedRequest__Output, GetGlobalFeedResponse>
type GetUserFeedHandler = grpc.handleUnaryCall<GetUserFeedRequest__Output, GetUserFeedResponse>
type GetPostHandler = grpc.handleUnaryCall<GetPostRequest__Output, GetPostResponse>
type GetCommentsHandler = grpc.handleUnaryCall<GetCommentRequest__Output, GetCommentResponse>

interface IFeedController {

  getGlobalFeed: GetGlobalFeedHandler
  getUserFeed: GetUserFeedHandler
  getPost: GetPostHandler

  getComments: GetCommentsHandler
}

export default IFeedController