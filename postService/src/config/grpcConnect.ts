import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import { ProtoGrpcType } from '../proto/post'
import path from 'path'
import logInterceptor from '../util/logInterceptor'
import { commentController, likeController, postController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/post.proto')
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
    userProto.post.PostService.service,
    {
      createPost: logInterceptor(postController.createPost),
      updatePost: logInterceptor(postController.updatePost),
      deletePost: logInterceptor(postController.deletePost),
      ReportPost: logInterceptor(postController.reportPost),
      savePost: logInterceptor(postController.savePost),

      createComment: logInterceptor(commentController.createComment),
      updateComment: logInterceptor(commentController.updateComment),
      deleteComment: logInterceptor(commentController.deleteComment),

      like: logInterceptor(likeController.like),
      unLike: logInterceptor(likeController.unlike),
    }
  )

}


export default grpcConnect