import { NextFunction, Request, Response } from "express";
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import logger from '../logger/loggerIndex'
import { grpcCodeToHttpStatus } from '../util/converters'

const red = '\x1b[31m'; // Red color
const reset = '\x1b[0m'; // Reset color

const formattedErrorLog = (error: HttpError, req: Request, res: Response) => {
  return {
    errorName: error.name,
    errorMessage: error.message,
    errorStack: error.stack,
    request: {
      method: req.method,
      url: req.url,
      origin: req.headers.origin,
      host: req.headers.host,
      clientIp: req?.headers['x-forwarded-for'] || req.socket.remoteAddress,
    },
    response: {
      header: res.getHeaders(),
      statusCode: res.statusCode
    }
  }
}


const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  // console.log(error)

  if (error.name === 'TokenExpiredError') {
    error.statusCode = httpStatus.UNAUTHORIZED
  }

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
    const errorMessage = error?.details 
    const capitalizedMessage = errorMessage?.charAt(0).toUpperCase() + errorMessage.slice(1);

    resJson = {
      status: statusCode < 500 ? 'failed' : 'error',
      name: error.name,
      message: capitalizedMessage
    }
  } else if (error instanceof Error) {
    resJson = {
      status: 'error',
      name: error.name,
      message: error.message
    }
  }

  res.status(statusCode).json(resJson)

  logger.log(
    'error',
    error.message,
    {
      logData: formattedErrorLog(error, req, res),
      filename: 'api-gateway-error.json.log'
    }
  )

}

export default errorHandler