import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from './grpc'
import { ProtoGrpcType } from '../proto/payment'
import path from 'path'
import logInterceptor from '../util/logInterceptor'
import { paymentController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/payment.proto')
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

  const paymentProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()

  server.addService(
    paymentProto.payment.PaymentService.service,
    {
      createOrder: logInterceptor(paymentController.createOrder),
      createOrderStatusOption: logInterceptor(paymentController.createOrderStatusOption),
      updateOrder: logInterceptor(paymentController.updateOrder),

      createPayment: logInterceptor(paymentController.createPayment),

      getUserSubscriptions: logInterceptor(paymentController.getUserSubscriptions),
      createSubscription: logInterceptor(paymentController.createSubscription),
      getAllSubscriptions: logInterceptor(paymentController.getAllSubscriptions),

      subscribeWithWallet: logInterceptor(paymentController.subscribeWithWallet),
      getUserTransactions: logInterceptor(paymentController.getUserTransactions),
      getUserWallet: logInterceptor(paymentController.getUserWallet),
    }
  )

}


export default grpcConnect