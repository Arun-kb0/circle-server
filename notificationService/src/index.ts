import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './config/dbConnect'
import grpcConnect from './config/grpcConnect'
import subscribeToNotificationQueue from './subscriber/subscribeToNotificationQueue'
import UseExpress from './config/UseExpress'
import UseHttpServer from './config/UseHttpServer'
import UseSocketIo from './config/UseSocketIo'
import { removeUser, setUser } from './util/notificationUsersCache'
import socketLogger from './logger/socketLogger'
import { SocketEvents } from './constants/enums'

const MONGODB_URI = process.env.NOTIFICATION_DB_URI || ''
const HTTP_PORT = process.env.NOTIFICATION_HEALTH_CHECK_PORT || 8086

const app = UseExpress.getInstance()
const server = UseHttpServer.getInstance()
const io = UseSocketIo.getInstance()

// * health checks
app.get('/health', (req, res) => {
  res.status(200).send('OK');
})


// * socket io
io.on("connection", async (socket) => {
  console.log('\n_____ ___ __ __ socket connection ______ ____ ____ ___')
  console.log(`user connected ${socket.id}`)

  const userId = socket.handshake.query.userId
  if (typeof userId !== 'string') throw new Error('invalid userId on socket connection')
  if (userId) await setUser(userId, socket.id)
  socket.emit(SocketEvents.getNotificationSocketId, { notificationSocketId: socket.id })

  // * socket logger 
  socket.use(socketLogger)

  // * socket routes

  socket.on("disconnect", async () => {
    console.log('user disconnected - ', socket.id)
    await removeUser(userId)
  })

})



app.all('*', (req, res) => {
  res.status(404).send('Not Found');
})


dbConnect(MONGODB_URI)
  .then(() => {
    grpcConnect()
    subscribeToNotificationQueue()
    server.listen(HTTP_PORT, () => {
      console.log(`notification service is running at ${HTTP_PORT}`)
    })
  })
  .catch((err)=> console.log(err))
