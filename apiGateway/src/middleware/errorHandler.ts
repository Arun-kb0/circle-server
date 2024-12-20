import { NextFunction, Request, Response } from "express";
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import logger from '../logger/loggerIndex'

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


const errorHandler = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'TokenExpiredError') {
    error.statusCode = httpStatus.UNAUTHORIZED
  }

  error.statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR
  res.status(error.statusCode).json({
    status: error.status,
    name: error.name,
    message: error.message
  })

  logger.log(
    'error',
    error.message,
    {
      logData: formattedErrorLog(error, req, res),
      filename: 'ErrorLogs.log'
    }
  )

}

export default errorHandler