import { PaginationComment, PaginationPost } from "../constants/SvcTypes";
import { ICommentExt } from "../interfaces/IComment";
import IFeedController, {
  GetCommentsHandler, GetGlobalFeedHandler,
  GetPostHandler, GetUserCreatedPostsHandler, GetUserFeedHandler, SearchPostHandler
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

}

export default FeedController