import e, { Express } from "express";
import { PeerServer, PeerServerEvents } from "peer";

const PORT = 9000
const PATH = '/peer'

const runPeerServer = () => {
  const peerServer = PeerServer({
    port: PORT,
    path: PATH,
    allow_discovery: true
  })
  console.log(`peer service is running on ${PORT}`)
  return peerServer
}


class PeerServerClient {
  private static instance: (Express & PeerServerEvents) | null = null

  static getInstance(): Express & PeerServerEvents {
    if (!PeerServerClient.instance) {
      PeerServerClient.instance = PeerServer({
        port: PORT,
        path: PATH,
        allow_discovery: true
      }) as unknown as Express & PeerServerEvents
      console.log(`peer service is running on ${PORT}`)
    }
    return PeerServerClient.instance
  }

}

export default PeerServerClient

const client = PeerServerClient.getInstance()

