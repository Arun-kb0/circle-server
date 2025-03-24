import dotenv from 'dotenv'
dotenv.config()
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import authRouter from './router/authRoutes'
import httpLogger from './middleware/httpLogger'
import HttpError from './util/HttpError'
import httpStatus from './constants/httpStatus'
import errorHandler from './middleware/errorHandler'
import cookieParser from 'cookie-parser'
import userRouter from './router/userRoutes'
import postRouter from './router/postRouter'
import commentRouter from './router/commentRouter'
import { corsOptions } from './config/corsOptions'
import authorize from './middleware/authorize'
import likeRouter from './router/likeRouter'
import feedRouter from './router/feedRouter'
import UseExpress from './config/UseExpress'
import UseSocketIo from './config/UseSocketIo'
import UseHttpServer from './config/UseHttpServer'
import chatSocketRouter from './router/chatSocketRouter'
import liveSocketRouter from './router/liveSocketRouter'
import adminRouter from './router/admin/AdminRouter'
import chatRouter from './router/chatRouter'
import { SocketEvents } from './constants/enums'
import socketLogger from './middleware/socketLogger'
import { getOnlineUserKeys, removeSingleOnlineUser, setOnlineUser } from './util/onlineUsersCache'
import notificationRouter from './router/notificationRoutes'
import paymentRouter from './router/paymentRouter'

const app = UseExpress.getInstance()
const server = UseHttpServer.getInstance()
const io = UseSocketIo.getInstance()
const PORT = process.env.API_GATEWAY_PORT || 5001
const HOST = process.env.API_GATEWAY_HOST || 'localhost'


app.use(express.json())
app.use(cookieParser())

app.use(httpLogger)
app.use(cors(corsOptions))

app.use('/auth', authRouter)
app.use('/user', authorize, userRouter)
app.use('/post', authorize, postRouter)
app.use('/comment', authorize, commentRouter)
app.use('/like', authorize, likeRouter)
app.use('/feed', authorize, feedRouter)
app.use('/chat', authorize, chatRouter)
app.use('/notification', authorize, notificationRouter)
app.use('/payment', paymentRouter)

app.use('/admin', authorize, adminRouter)

// * socket io
io.on("connection", async (socket) => {
  console.log('\n_____ ___ __ __ socket connection ______ ____ ____ ___')
  console.log(`user connected ${socket.id}`)

  const userId = socket.handshake.query.userId
  if (typeof userId !== 'string') throw new Error('invalid userId on socket connection')
  if (userId) await setOnlineUser(userId, socket.id)
  const onlineUsers = await getOnlineUserKeys()
  io.emit(SocketEvents.getOnlineUsers, { onlineUsers })
  socket.emit(SocketEvents.me, { userSocketId: socket.id })

  // * socket logger 
  socket.use(socketLogger)

  // * socket routes
  chatSocketRouter(socket)
  liveSocketRouter(socket)

  socket.on("disconnect", async () => {
    console.log('user disconnected - ', socket.id)
    await removeSingleOnlineUser(userId)
    const onlineUsers = await getOnlineUserKeys()
    io.emit(SocketEvents.getOnlineUsers, { onlineUsers })
  })

})


app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError(httpStatus.NOT_FOUND, 'route not found')
  next(error)
})

app.use(errorHandler)
server.listen(PORT, () => {
  console.log(`api gateway is running at ${PORT}`)
})

