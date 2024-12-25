import { NextFunction, Request, Response } from "express";
import httpStatus from "../constants/httpStatus";


export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({ message: "get posts success", posts: [] })
  } catch (error) {
    next(error)
  }
}