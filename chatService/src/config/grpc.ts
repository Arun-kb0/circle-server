import * as grpc from '@grpc/grpc-js'

const server = new grpc.Server()
const PORT = process.env.CHAT_SERVICE_PORT || 50055
const HOST = process.env.CHAT_SERVICE_HOST || '0.0.0.0'
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