import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/paymentProto/payment'
import { PaymentServiceClient } from "../protos/paymentProto/payment/PaymentService";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'paymentProto', 'payment.proto')
const HOST = process.env.PAYMENT_SERVICE_HOST || 'host.docker.internal'
const PORT = process.env.PAYMENT_SERVICE_PORT || 50057
const IP_ADDRESS = `${HOST}:${PORT}`

console.log('payment service')
console.log(PROTO_PATH)
console.log(IP_ADDRESS)

class ChatGrpcClient {
  private static instance: PaymentServiceClient | null = null

  static getClient(): PaymentServiceClient {
    if (!ChatGrpcClient.instance) {
      const packageDef = getPackageDef(PROTO_PATH)
      const paymentProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      ChatGrpcClient.instance = new paymentProto.payment.PaymentService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return ChatGrpcClient.instance
  }

  static IsClientConnected() {
    const state = this.instance?.getChannel().getConnectivityState(false)
    console.log("IsClientConnected ")
    console.log(state)
  }

}

export default ChatGrpcClient