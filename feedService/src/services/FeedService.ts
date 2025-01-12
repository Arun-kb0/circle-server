import { SvcReturnType, PaginationPost, PaginationComment } from '../constants/SvcTypes';
import IComment from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo';
import IFeedService from '../interfaces/IFeedService'
import IPost, { IPostExt } from '../interfaces/IPost';
import handleError from '../util/handleError'

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
      const data = {
        posts,
        numberOfPages,
        currentPage: page
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
      const data = {
        posts,
        numberOfPages,
        currentPage: page
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getPost(postId: string): SvcReturnType<IPost | null> {
    try {
      const post = await this.feedRepo.getPost(postId)
      return { err: null, data: post }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async searchPost(searchText: string, page: number): SvcReturnType<PaginationPost<IPost[] | null>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getSearchPostsCount(searchText)
      const numberOfPages = Math.ceil(total / LIMIT)

      const posts = await this.feedRepo.searchPost(searchText, LIMIT, startIndex)
      const data = {
        posts,
        numberOfPages,
        currentPage: page
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getComments(contentId: string, page: number): SvcReturnType<PaginationComment<IComment[]>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getCommentCount(contentId)
      const numberOfPages = Math.ceil(total / LIMIT)

      const comments = await this.feedRepo.getComments(contentId, LIMIT, startIndex)
      const data = {
        comments,
        numberOfPages,
        currentPage: page
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

}

export default FeedService