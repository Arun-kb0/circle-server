import * as grpc from '@grpc/grpc-js'

const server = new grpc.Server()
const HOST = process.env.PAYMENT_SERVICE_HOST || 'localhost'
const PORT = process.env.PAYMENT_SERVICE_PORT || 50057
const IP_ADDRESS = `${HOST}:${PORT}`

export const startGrpcServer = () => {
  server.bindAsync(
    IP_ADDRESS,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error)
        return
      }
      console.log(`chat service is running on ${IP_ADDRESS}`)
    }
  )
}

export const getGrpcServer = () => {
  return server
}