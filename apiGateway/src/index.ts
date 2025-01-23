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
import chatRouter from './router/chatRouter'

const app = UseExpress.getInstance()
const server = UseHttpServer.getInstance()
const io = UseSocketIo.getInstance()
const PORT = 5001


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

// * socket io
io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`)

  chatSocketRouter(socket)

  socket.on('test-event', (data) => {
    console.log('Received test-event:', data);
    socket.emit('test-response', { message: 'Hello from server' });
  });

  socket.on("disconnect", () => {
    console.log('user disconnected - ', socket.id)
  })
})


app.use('/test', (req, res) => {
  console.log('home req')
  res.status(200).json({ message: 'test call success' })
})

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError(httpStatus.NOT_FOUND, 'route not found')
  next(error)
})

app.use(errorHandler)

server.listen(PORT, () => {
  console.log(`api gateway is running at ${PORT}`)
})

