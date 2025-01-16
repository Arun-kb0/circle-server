import * as grpc from '@grpc/grpc-js'
import { CustomError } from './CustomError'
import { MongooseError } from 'mongoose'
import logger from '../logger/loggerIndex'


const handleError = (err: any) => {
  console.log(err)
  let msg = 'unexpected error occurred.'
  let code = grpc.status.INTERNAL
  let errStack = null

  if (err instanceof CustomError) {
    if (err.level === 'cnt') {
      msg = err.message
      code = err.code
      errStack = err.stack
    } else if (err.level === 'svc') {
      code = err.code
      msg = err.message
      errStack = err.stack
    }
  } else if (err instanceof MongooseError) {
    msg = err.message
    errStack = err.stack
  } else if (err instanceof Error) {
    msg = err.message
    errStack = err.stack
  }

  logger.log("error", msg,
    {
      logData: { message: msg, grpcStatus: code, stack: errStack },
      filename: 'user-service-error.json.log'
    }
  )
  return { message: msg, code }
}

export default handleError