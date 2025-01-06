import { NextFunction, Response } from "express";
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import { AuthRequest } from "../constants/types";
import verifyToken from '../util/verifyToken'


const authorize = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    if (!authHeader) throw new HttpError(httpStatus.UNAUTHORIZED, 'token not found')
    const token = authHeader.split(' ')[1]
    const { status, msg, data } = verifyToken(token)
    if (status !== httpStatus.OK) throw new HttpError(status, msg)
    req.username = data?.username
    req.userId = data?.userId
    
    console.log("userId = ",data?.userId)
    console.log("username = ",data?.username)
    next()
  } catch (error) {
    next(error)
  }
}


export default authorize