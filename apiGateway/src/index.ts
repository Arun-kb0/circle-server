import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import authRouter from './router/authRoutes'
import httpLogger from './middleware/httpLogger'
import HttpError from './util/HttpError'
import httpStatus from './constants/httpStatus'
import errorHandler from './middleware/errorHandler'

const app = express()
const PORT = 5001

// app.use(express.urlencoded())
app.use(express.json())

app.use(httpLogger)
app.use(cors())

app.use('/auth', authRouter)


app.use('/test', (req, res) => {
  console.log('home req')
  res.send('home page')
})





app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError(httpStatus.NOT_FOUND, 'route not found')
  next(error)
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`api gateway is running at ${PORT}`)
})

