import { PaginationComment, PaginationPost } from "../constants/SvcTypes";
import { ICommentExt } from "../interfaces/IComment";
import IFeedController, {
  GetCommentsHandler, GetGlobalFeedHandler, GetPopularPostsHandler,
  GetPostHandler, GetTotalCommentsCountHandler,
  GetTotalLikesCountHandler, GetCommentChildrenHandler,
  GetTotalPostsCountHandler, GetUserCreatedPostsHandler, GetUserFeedHandler,
  SearchPostHandler,
  GetFeedCountsHandler,
  GetPostsCountByDateHandler,
  GetSingleCommentHandler,
  GetUserSavedPostsHandler
} from "../interfaces/IFeedController";
import IFeedService from "../interfaces/IFeedService";
import ILike from "../interfaces/ILike";
import { IPostExt } from "../interfaces/IPost";
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from '../util/validations'


class FeedController implements IFeedController {

  constructor(
    private feedService: IFeedService
  ) { }

  getUserSavedPosts: GetUserSavedPostsHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('userId and page are required.', userId, page )
      const res = await this.feedService.getUserSavedPosts(userId as string,page as number)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getSingleComment: GetSingleCommentHandler = async (call, cb) => {
    try {
      const { commentId } = call.request
      validateRequest('commentId is required.', commentId)
      const res = await this.feedService.getSingleComment(commentId as string)
      validateResponse(res)
      console.log(res.data)
      cb(null, { comment: res.data })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getPostsCountByDate: GetPostsCountByDateHandler = async (call, cb) => {
    try {
      const { startDate, endDate } = call.request
      validateRequest('startDate and endDate are required.', startDate, endDate)
      const res = await this.feedService.getPostsCountByDate(startDate as string, endDate as string)
      validateResponse(res)
      console.log(res.data)
      cb(null, { postsCountArray: res.data as { date: string, count: number }[] })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getFeedCounts: GetFeedCountsHandler = async (call, cb) => {
    try {
      const res = await this.feedService.getFeedCounts()
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getPopularPosts: GetPopularPostsHandler = async (call, cb) => {
    try {
      const { limit } = call.request
      validateRequest('page is required.', limit)
      const res = await this.feedService.popularPosts(limit as number)
      validateResponse(res)
      cb(null, { posts: res.data as IPostExt[] })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getTotalPostsCount: GetTotalPostsCountHandler = async (call, cb) => {
    try {
      const { } = call.request
      const res = await this.feedService.totalPostsCount()
      validateResponse(res)
      cb(null, { totalPostsCount: res.data as number })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getTotalCommentsCount: GetTotalCommentsCountHandler = async (call, cb) => {
    try {
      const { } = call.request
      const res = await this.feedService.totalCommentsCount()
      validateResponse(res)
      cb(null, { totalCommentsCount: res.data as number })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getTotalLikesCount: GetTotalLikesCountHandler = async (call, cb) => {
    try {
      const { } = call.request
      const res = await this.feedService.totalLikesCount()
      validateResponse(res)
      cb(null, { totalLikesCount: res.data as number })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getUserCreatedPosts: GetUserCreatedPostsHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.getUserCreatedPosts(userId as string, page as number)
      validateResponse(res)
      const { posts, likes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const response = { posts, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getGlobalFeed: GetGlobalFeedHandler = async (call, cb) => {
    try {
      const { page } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.getGlobalFeed(page as number)
      validateResponse(res)
      const { posts, likes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const response = { posts, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getUserFeed: GetUserFeedHandler = async (call, cb) => {
    try {
      const { page } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.getUserFeed(page as number)
      validateResponse(res)
      const { posts, likes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const response = { posts, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getPost: GetPostHandler = async (call, cb) => {
    try {
      const { postId } = call.request
      validateRequest('postId is required.', postId)
      const res = await this.feedService.getPost(postId as string)
      validateResponse(res)
      const { post, like } = res.data as { like: ILike, post: IPostExt }
      cb(null, { post, like })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  searchPost: SearchPostHandler = async (call, cb) => {
    try {
      const { searchText, page, startDate, endDate } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.searchPost(searchText as string, page as number, startDate, endDate)
      validateResponse(res)
      const { posts, likes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const response = { posts, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getComments: GetCommentsHandler = async (call, cb) => {
    try {
      const { contentId, page } = call.request
      validateRequest('contentId and page are required.', contentId, page)
      const res = await this.feedService.getComments(contentId as string, page as number)
      validateResponse(res)
      const { comments, likes, ...rest } = res.data as PaginationComment<ICommentExt[]>
      const response = { comments, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  getCommentChildren: GetCommentChildrenHandler = async (call, cb) => {
    try {
      const { contentId, parentId, page } = call.request
      validateRequest('contentId, parentId and page are required.', contentId, page)
      const res = await this.feedService.getCommentChildren(contentId as string, page as number, parentId)
      validateResponse(res)
      const { comments, likes, ...rest } = res.data as PaginationComment<ICommentExt[]>
      const response = { comments, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

}

export default FeedController