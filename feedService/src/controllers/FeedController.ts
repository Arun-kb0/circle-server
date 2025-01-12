import { PaginationComment, PaginationPost } from "../constants/SvcTypes";
import IComment from "../interfaces/IComment";
import IFeedController, {
  GetCommentsHandler, GetGlobalFeedHandler,
  GetPostHandler, GetUserFeedHandler, SearchPostHandler
} from "../interfaces/IFeedController";
import IFeedService from "../interfaces/IFeedService";
import IPost, { IPostExt } from "../interfaces/IPost";
import { convertCommentForGrpc, convertPostForGrpc } from '../util/converter'
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from '../util/validations'


class FeedController implements IFeedController {

  constructor(
    private feedService: IFeedService
  ) { }

  getGlobalFeed: GetGlobalFeedHandler = async (call, cb) => {
    try {
      const { page } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.getGlobalFeed(page as number)
      validateResponse(res)
      const { posts: rawPosts, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const response = { posts, ...rest }
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
      const { posts: rawPosts, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const response = { posts, ...rest }
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
      const post = convertPostForGrpc(res.data as IPostExt)
      cb(null, { post: post })
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

  searchPost: SearchPostHandler = async (call, cb) => {
    try {
      const { searchText, page } = call.request
      validateRequest('page and searchText are required.', page, searchText)
      const res = await this.feedService.searchPost(searchText as string, page as number)
      validateResponse(res)
      const { posts: rawPosts, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const response = { posts, ...rest }
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
      const { comments: rawComments, ...rest } = res.data as PaginationComment<IComment[]>
      const comments = rawComments.map(comment => convertCommentForGrpc(comment))
      const response = { comments, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

}

export default FeedController