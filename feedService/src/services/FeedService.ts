import { SvcReturnType, PaginationPost, PaginationComment } from '../constants/SvcTypes';
import IComment, { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo';
import IFeedService from '../interfaces/IFeedService'
import IPost, { IPostExt } from '../interfaces/IPost';
import handleError from '../util/handleError'
import httpStatus from '../constants/httpStatus'
import ILike from '../interfaces/ILike';

const LIMIT = Number(process.env.PAGINATION_LIMIT) || 5

class FeedService implements IFeedService {

  constructor(
    private feedRepo: IFeedRepo
  ) { }

  async getGlobalFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getPostCount()
      const numberOfPages = Math.ceil(total / LIMIT)

      const posts = await this.feedRepo.getGlobalPosts(LIMIT, startIndex)
      const postIds = posts.map(post => post._id)
      const likes = await this.feedRepo.getLikes(postIds, 'post')
      const data = {
        posts,
        numberOfPages,
        currentPage: page,
        likes
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getUserFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>> {
    try {
      // ! find followees before proceeding
      //  ! getPostCount(followeeIds)

      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getPostCount([])
      const numberOfPages = Math.ceil(total / LIMIT)

      const posts = await this.feedRepo.getUserPosts(LIMIT, startIndex)
      const postIds = posts.map(post => post._id)
      const likes = await this.feedRepo.getLikes(postIds, 'post')
      const data = {
        posts,
        numberOfPages,
        currentPage: page,
        likes
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getPost(postId: string): SvcReturnType<{ post: IPostExt, like: ILike | null } | null> {
    try {
      const post = await this.feedRepo.getPost(postId)
      if (!post) return { err: httpStatus.NOT_FOUND, errMsg: 'post not found', data: null }
      const like = await this.feedRepo.getLike(post._id, 'post')
      return { err: null, data: { post, like } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async searchPost(searchText: string, page: number): SvcReturnType<PaginationPost<IPostExt[] | null>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getSearchPostsCount(searchText)
      const numberOfPages = Math.ceil(total / LIMIT)
      const posts = await this.feedRepo.searchPost(searchText, LIMIT, startIndex)
      if (!posts) return { err: httpStatus.NOT_FOUND, errMsg: 'no posts found', data: null }

      const postIds = posts.map(post => post._id)
      const likes = await this.feedRepo.getLikes(postIds, 'post')
      const data = {
        posts,
        numberOfPages,
        currentPage: page,
        likes
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getComments(contentId: string, page: number): SvcReturnType<PaginationComment<ICommentExt[]>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getCommentCount(contentId)
      const numberOfPages = Math.ceil(total / LIMIT)

      const comments = await this.feedRepo.getComments(contentId, LIMIT, startIndex)
      const commentIds = comments.map(comment => comment._id)
      const likes = await this.feedRepo.getLikes(commentIds, 'comment')
      const data = {
        comments,
        numberOfPages,
        currentPage: page,
        likes
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

}

export default FeedService