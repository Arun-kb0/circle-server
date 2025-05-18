import { DefaultEventsMap, Server } from "socket.io"
import { corsOptions } from './corsOptions'
import UseHttpServer from "./UseHttpServer"
 
const server = UseHttpServer.getInstance()

class UseSocketIo {
  private static instance: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null = null

  static getInstance() {
    if (!UseSocketIo.instance) {
      UseSocketIo.instance = new Server(server, {
        cors: corsOptions,
        pingInterval: 10000,
        pingTimeout: 5000
      })
    }
    return UseSocketIo.instance
  }

}

export default UseSocketIo