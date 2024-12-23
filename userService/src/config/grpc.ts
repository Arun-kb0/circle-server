import * as grpc from '@grpc/grpc-js'

const server = new grpc.Server()
const PORT = process.env.USER_SERVICE_PORT || 50052
const IP = process.env.USER_SERVICE_HOST || 'localhost'
const IP_ADDRESS = `${IP}:${PORT}`

export const startGrpcServer = () => {
  server.bindAsync(
    IP_ADDRESS,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error)
        return
      }
      console.log(`user service is running on ${IP_ADDRESS}`)
    }
  )
}

export const getGrpcServer = () => {
  return server
}