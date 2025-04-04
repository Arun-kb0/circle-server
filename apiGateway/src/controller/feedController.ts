import { NextFunction, Request, Response } from "express";
import FeedGrpcClient from '../config/FeedGrpcClient'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { AuthRequest } from "../constants/types";

const client = FeedGrpcClient.getClient()

export const getPostLikedUsers = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page, postId } = req.query
    if (!page || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required')
    // client.getUserCreatedPosts({ userId, page: Number(page) }, (err, msg) => {
    //   if (err) return next(err)
    //   if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get user created posts failed'))
    //   msg?.posts?.map(item => console.log(item.authorId))
    //   res.status(httpStatus.OK).json({ message: 'get user created posts success', ...msg })
    // })
  } catch (error) {
    next(error)
  }
}

export const getUseCreatedPosts = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page, userId } = req.query
    if (typeof userId !== 'string' || !page || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required')
    client.getUserCreatedPosts({ userId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get user created posts failed'))
      msg?.posts?.map(item => console.log(item.authorId))
      res.status(httpStatus.OK).json({ message: 'get user created posts success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getGlobalFeed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query
    console.log("page = ", page)
    if (!page || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required')
    client.getGlobalFeed({ page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get global posts failed'))
      res.status(httpStatus.OK).json({ message: 'get global posts success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getUserFeed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query
    if (!page || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page is required')
    client.getUserFeed({ page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get user posts failed'))
      res.status(httpStatus.OK).json({ message: 'get user posts success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.query
    if (typeof postId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'postId is required')
    client.getPost({ postId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get post failed'))
      res.status(httpStatus.OK).json({ message: 'get post success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const searchPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchText, page, startDate, endDate } = req.query
    if (typeof searchText !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'postId and page required')
    // if (typeof startDate !== 'string' || typeof endDate !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'startDate and end date are required')
    const start = startDate as any
    const end = endDate as any
    client.searchPost({ searchText, page: Number(page), startDate: start, endDate: end }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'search post failed'))
      res.status(httpStatus.OK).json({ message: 'search post success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { contentId, page } = req.query
    if (typeof contentId !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'postId and page required')
    client.getComment({ contentId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'search post failed'))
      res.status(httpStatus.OK).json({ message: 'get comments success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getChildComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { contentId, parentId, page } = req.query
    if ((typeof parentId !== 'string' || typeof parentId === undefined) || typeof contentId !== 'string' || isNaN(Number(page))) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'ContentId ,parentId and page required')
    }
    client.getCommentChildren({ contentId, parentId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Get child comments failed'))
      res.status(httpStatus.OK).json({ message: 'Get child comments success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getSavedPosts = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    const { page } = req.query
    if (isNaN(Number(page))) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'ContentId ,parentId and page required')
    }
    client.getUserSavedPosts({ userId, page: Number(page) }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get saved posts failed'))
      res.status(httpStatus.OK).json({ message: 'get saved posts success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}