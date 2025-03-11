import PostGrpcClient from '../../config/PostGrpcClient'
import FeedGrpcClient from '../../config/FeedGrpcClient'
import PaymentGrpcClient from '../../config/PaymentGrpcClient'
import { NextFunction, Request, Response } from 'express'
import HttpError from '../../util/HttpError'
import httpStatus from '../../constants/httpStatus'
import { AuthRequest } from '../../constants/types'

const postClient = PostGrpcClient.getClient()
const feedClient = FeedGrpcClient.getClient()
const paymentClient = PaymentGrpcClient.getClient()

export const searchPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchText, page, startDate, endDate } = req.query
    if (typeof searchText !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'postId and page required')
    // if (typeof startDate !== 'string' || typeof endDate !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'startDate and end date are required')
    const start = startDate as any
    const end = endDate as any
    feedClient.searchPost({ searchText, page: Number(page), startDate: start, endDate: end }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'search post failed'))
      res.status(httpStatus.OK).json({ message: 'search post success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}


export const updatePost = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params
    const { post } = req.body
    const { userId } = req
    console.log('update image controller')
    console.log(req.params, userId)
    if (!post || typeof postId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'post and postId required')
    postClient.updatePost({ post, postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post creation failed.'))
      res.status(httpStatus.OK).json({ message: 'update post success', post: msg.post })
    })
  } catch (error) {
    next(error)
  }
}


export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params
    if (!postId) throw new HttpError(httpStatus.BAD_REQUEST, 'postId is required')
    postClient.deletePost({ postId }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post deletion failed.'))
      res.status(httpStatus.OK).json({ message: "delete post success", postId: msg.postId })
    })
  } catch (error) {
    next(error)
  }
}

export const getPopularPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit } = req.query
    console.log('limit', limit)
    if (isNaN(Number(limit))) throw new HttpError(httpStatus.BAD_REQUEST, 'limit must be a number')
    feedClient.getPopularPosts({ limit: Number(limit) }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get popular posts failed.'))
      res.status(httpStatus.OK).json({ message: "get popular posts success", posts: msg.posts })
    })
  } catch (error) {
    next(error)
  }
}

export const getFeedCounts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    feedClient.getFeedCounts({}, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get feed counts failed.'))
      res.status(httpStatus.OK).json({ message: "get feed counts success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getPostCountByDate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { startDate, endDate } = req.query
    if (typeof startDate !== 'string' || typeof endDate !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'startDate and endDate are required')
    feedClient.getPostsCountByDate({ startDate, endDate }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get post counts by date failed.'))
      res.status(httpStatus.OK).json({ message: "get post counts by date success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getFilteredReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchText, page, startDate, endDate } = req.query
    if (typeof searchText !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'postId and page required')
    const start = startDate as any
    const end = endDate as any
    feedClient.getAllReports({ searchText, page: Number(page), startDate: start, endDate: end }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get filtered reports failed.'))
      res.status(httpStatus.OK).json({ message: "get filtered reports success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getFilteredSubscriptions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchText, page, startDate, endDate } = req.query
    if (typeof searchText !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'postId and page required')
    const start = startDate as any
    const end = endDate as any
    paymentClient.getAllSubscriptions({ searchText, page: Number(page), startDate: start, endDate: end }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get all subscriptions  failed.'))
      res.status(httpStatus.OK).json({ message: "get all subscriptions  success", ...msg })
    })
  } catch (error) {
    next(error)
  }
}