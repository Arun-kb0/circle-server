import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import { ProtoGrpcType } from '../proto/post'
import path from 'path'
import logInterceptor from '../util/logInterceptor'


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
    //  ! add services here
    }
  )

}


export default grpcConnect