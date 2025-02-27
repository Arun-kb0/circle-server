import { SvcReturnType, PaginationPost, PaginationComment } from '../constants/SvcTypes';
import IComment, { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo';
import IFeedService from '../interfaces/IFeedService'
import IPost, { IPostExt } from '../interfaces/IPost';
import handleError from '../util/handleError'
import httpStatus from '../constants/httpStatus'
import ILike from '../interfaces/ILike';
import { validateResponse } from '../util/validations';

const LIMIT = Number(process.env.PAGINATION_LIMIT) || 10

class FeedService implements IFeedService {

  constructor(
    private feedRepo: IFeedRepo
  ) { }

  async getSingleComment(commentId: string): SvcReturnType<ICommentExt | null> {
    try {
      const commentData = await this.feedRepo.getSingleComment(commentId)
      return { err: null, data: commentData }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getPostsCountByDate(startDate: string, endDate: string): SvcReturnType<{ date: string; count: number; }[]> {
    try {
      const postData = await this.feedRepo.getPostsCountByDate(startDate, endDate)
      return { err: null, data: postData }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getFeedCounts(): SvcReturnType<{ totalPostsCount: number; totalCommentsCount: number; totalLikesCount: number; }> {
    try {
      const { totalPostsCount, totalCommentsCount, totalLikesCount } = await this.feedRepo.getFeedCounts()
      return { err: null, data: { totalPostsCount, totalCommentsCount, totalLikesCount } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async popularPosts(limit: number): SvcReturnType<IPostExt[] | null> {
    try {
      const posts = await this.feedRepo.popularPosts(limit)
      return { err: null, data: posts }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async totalPostsCount(): SvcReturnType<number> {
    try {
      const count = await this.feedRepo.totalPostsCount()
      return { err: null, data: count }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async totalCommentsCount(): SvcReturnType<number> {
    try {
      const count = await this.feedRepo.totalCommentsCount()
      return { err: null, data: count }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async totalLikesCount(): SvcReturnType<number> {
    try {
      const count = await this.feedRepo.totalLikesCount()
      return { err: null, data: count }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getUserCreatedPosts(userId: string, page: number): SvcReturnType<PaginationPost<IPostExt[]>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getUserCreatedPostCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const emptyResponseData = {
        posts: [],
        numberOfPages: 0,
        currentPage: 0,
        likes: []
      }
      if (total === 0) return { err: null, data: emptyResponseData }
      const posts = await this.feedRepo.getUserCreatedPosts(userId, LIMIT, startIndex)
      if (!posts || posts?.length === 0) return { err: null, data: emptyResponseData }
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

  async searchPost(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<PaginationPost<IPostExt[] | null>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getSearchPostsCount(searchText, startDate, endDate)
      const numberOfPages = Math.ceil(total / LIMIT)
      const posts = await this.feedRepo.searchPost(searchText, LIMIT, startIndex, startDate, endDate)
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

  async getCommentChildren(contentId: string, page: number, parentId?: string): SvcReturnType<PaginationComment<ICommentExt[]>> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.feedRepo.getCommentChildrenCount(contentId, parentId)
      const numberOfPages = Math.ceil(total / LIMIT)

      const comments = await this.feedRepo.getCommentChildren(contentId, LIMIT, startIndex, parentId)
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