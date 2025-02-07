import { Socket } from "socket.io"
import { SocketEvents } from "../constants/enums"
import { JoinCallRoomDataType } from "../constants/types"
import { joinCallRoom } from "../controller/chatSocketController"

const peerSocketRoutes = (socket: Socket) => {
  console.log('peerSocketRoutes')
  socket.on(SocketEvents.callUserConnected, (data: JoinCallRoomDataType) => joinCallRoom(socket, data))
}

export default peerSocketRoutes