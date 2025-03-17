import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from './grpc'
import { ProtoGrpcType } from '../proto/feed'
import path from 'path'
import logInterceptor from '../util/logInterceptor'
import { feedController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/feed.proto')
const packageDef = protoLoader.loadSync(
  PROTO_FILE,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
)

const grpcConnect = () => {

  const userProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()

  server.addService(
    userProto.feed.FeedService.service,
    {
      getGlobalFeed: logInterceptor(feedController.getGlobalFeed),
      getUserFeed: logInterceptor(feedController.getUserFeed),
      getPost: logInterceptor(feedController.getPost),
      searchPost: logInterceptor(feedController.searchPost),
      getUserCreatedPosts: logInterceptor(feedController.getUserCreatedPosts),

      getComment: logInterceptor(feedController.getComments),
      getCommentChildren: logInterceptor(feedController.getCommentChildren),

      getPopularPosts: logInterceptor(feedController.getPopularPosts),
      getTotalPostsCount: logInterceptor(feedController.getTotalPostsCount),
      getTotalCommentsCount: logInterceptor(feedController.getTotalCommentsCount),
      getTotalLikesCount: logInterceptor(feedController.getTotalLikesCount),
      getFeedCounts: logInterceptor(feedController.getFeedCounts),
      getPostsCountByDate: logInterceptor(feedController.getPostsCountByDate),

      getSingleComment: logInterceptor(feedController.getSingleComment),

      getUserSavedPosts: logInterceptor(feedController.getUserSavedPosts),
      getAllReports : logInterceptor(feedController.getAllReports),
    }
  )

}


export default grpcConnect