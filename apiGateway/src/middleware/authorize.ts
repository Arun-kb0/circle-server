import { NextFunction, Response } from "express";
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import { AuthRequest } from "../constants/types";
import verifyToken from '../util/verifyToken'


const authorize = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    if (!authHeader) throw new HttpError(httpStatus.UNAUTHORIZED, 'token not found')
    console.log(authHeader)
    const token = authHeader.split(' ')[1]
    const { status ,msg } = verifyToken(token)
    if (status !== httpStatus.OK) throw new HttpError(status, msg)
    next()
  } catch (error) {
    next(error)
  }
}


export default authorize