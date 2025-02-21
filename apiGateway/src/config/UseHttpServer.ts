
import http from "http"
import UseExpress from "./UseExpress"

const app = UseExpress.getInstance()

class UseHttpServer {
  private static instance: http.Server | null = null

  static getInstance() {
    if (!UseHttpServer.instance) {
      UseHttpServer.instance = http.createServer(app)
    }
    return UseHttpServer.instance
  }

}

export default UseHttpServer