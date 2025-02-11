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
    if (status !== httpStatus.OK || !data) throw new HttpError(status, msg)
    const { username, userId, role } = data
    if (typeof userId !== 'string' || typeof username !== 'string') throw new HttpError(status, 'username and userId not found in token.')
    req.username = username
    req.userId = userId
    req.role = role
    next()
  } catch (error) {
    next(error)
  }
}


export default authorize