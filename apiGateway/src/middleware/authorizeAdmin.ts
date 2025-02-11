import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'
import { AuthRequest } from "../constants/types";
import { NextFunction, Response } from 'express';

const authorizeAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.role || req.role === 'user') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'only admin have access to this route')
    }
    next()
  } catch (error) {
    next(error)
  }
}

export default authorizeAdmin