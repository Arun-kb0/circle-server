import * as grpc from '@grpc/grpc-js'

const server = new grpc.Server()
const PORT = process.env.FEED_SERVICE_PORT || 50053
const HOST = process.env.FEED_SERVICE_HOST || 'localhost'
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
      console.log(`feed service is running on ${IP_ADDRESS}`)
    }
  )
}

export const getGrpcServer = () => {
  return server
}