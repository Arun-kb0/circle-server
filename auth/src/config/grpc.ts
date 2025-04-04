import * as grpc from '@grpc/grpc-js'

const server = new grpc.Server()
const PORT = process.env.AUTH_SERVICE_PORT || 50051
const IP = process.env.AUTH_SERVICE_HOST || 'localhost'
// const IP_ADDRESS = `0.0.0.0:${PORT}`
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
      console.log(`auth service is running on ${IP_ADDRESS}`)
    }
  )
}

export const getGrpcServer = () => {
  return server
}