import { PaginationComment, PaginationPost } from "../constants/SvcTypes";
import IComment, { ICommentExt } from "../interfaces/IComment";
import IFeedController, {
  GetCommentsHandler, GetGlobalFeedHandler,
  GetPostHandler, GetUserCreatedPostsHandler, GetUserFeedHandler, SearchPostHandler
} from "../interfaces/IFeedController";
import IFeedService from "../interfaces/IFeedService";
import ILike from "../interfaces/ILike";
import IPost, { IPostExt } from "../interfaces/IPost";
import { convertCommentForGrpc, convertLikeForGrpc, convertPostForGrpc } from '../util/converter'
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from '../util/validations'


class FeedController implements IFeedController {

  constructor(
    private feedService: IFeedService
  ) { }

  getUserCreatedPosts: GetUserCreatedPostsHandler = async (call, cb) => {
    try {
      const { userId , page } = call.request
      validateRequest('page is required.', page)
      const res = await this.feedService.getUserCreatedPosts(userId as string, page as number)
      validateResponse(res)
      const { posts: rawPosts, likes: rawLikes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const likes = rawLikes.map(like => convertLikeForGrpc(like))
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
      const { posts: rawPosts, likes: rawLikes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const likes = rawLikes.map(like => convertLikeForGrpc(like))
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
      const { posts: rawPosts, likes: rawLikes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const likes = rawLikes.map(like => convertLikeForGrpc(like))
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
      const { post: rawPost, like: rawLike } = res.data as { like: ILike, post: IPostExt }
      const post = convertPostForGrpc(rawPost)
      const like = rawLike ? convertLikeForGrpc(rawLike) : null
      cb(null, { post, like })
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
      const { posts: rawPosts, likes: rawLikes, ...rest } = res.data as PaginationPost<IPostExt[]>
      const posts = rawPosts.map(post => convertPostForGrpc(post))
      const likes = rawLikes.map(like => convertLikeForGrpc(like))
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
      const { comments: rawComments, likes: rawLikes, ...rest } = res.data as PaginationComment<ICommentExt[]>
      const comments = rawComments.map(comment => convertCommentForGrpc(comment))
      const likes = rawLikes.map(like => convertLikeForGrpc(like))
      const response = { comments, likes, ...rest }
      cb(null, response)
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

}

export default FeedController