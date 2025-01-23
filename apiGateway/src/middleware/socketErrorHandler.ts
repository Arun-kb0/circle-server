import httpStatus from '../constants/httpStatus'
import { grpcCodeToHttpStatus } from '../util/converters'
import logger from '../logger/loggerIndex'
import UseSocketIo from '../config/UseSocketIo'
import { format } from 'date-fns'
import HttpError from "../util/HttpError";

const socket = UseSocketIo.getInstance()

const formatSocketIOErrorLog = (error: Error, messageData: any) => ({
  type: 'socket.io',
  timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  errorMessage: error.message,
  stack: error.stack,
  messageData,
});


const socketErrorHandler = (error: any) => {
  console.log(error)

  let resJson: any = {}
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR

  if (error instanceof HttpError) {
    statusCode = error.statusCode
    resJson = {
      status: error.status,
      name: error.name,
      message: error.message
    }
  } else if ('code' in error) {
    statusCode = grpcCodeToHttpStatus(error.code)
    resJson = {
      status: statusCode < 500 ? 'failed' : 'error',
      name: error.name,
      message: error.message
    }
  } else if (error instanceof Error) {
    resJson = {
      status: 'error',
      name: error.name,
      message: error.message
    }
  }

  socket.emit("error-message", {
    error: resJson,
  });

  logger.log(
    'error',
    error.message,
    {
      logData: formatSocketIOErrorLog(error, resJson),
      filename: 'api-gateway-error.json.log'
    }
  )


}

export default socketErrorHandler