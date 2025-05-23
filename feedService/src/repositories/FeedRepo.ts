import { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo'
import { IPostExt } from '../interfaces/IPost';
import { Post } from '../model/postModel'
import { Comment } from '../model/commentModel'
import { getCachedPostCount, getPopularPostsFromCache } from '../util/redisCache'
import {
  addUserToPosts, addUserToPost, addUserToComments,
  addUserToLikes, addUserToLike, addUserToIReport
} from '../util/userClientFunctions'
import { Like } from '../model/likeModel'
import ILike from '../interfaces/ILike';
import IPostBaseRepo from '../interfaces/IPostBaseRepo'
import ICommentBaseRepo from '../interfaces/ICommentBaseRepo'
import ILikeBaseRepo from '../interfaces/ILikeBaseRepo'
import ISavedBaseRepo from '../interfaces/ISavedBaseRepo'
import IReportBaseRepo from '../interfaces/IReportBaseRepo'
import handleError from '../util/handleError';
import { IReportExt } from '../interfaces/IReport';


class FeedRepo implements IFeedRepo {

  constructor(
    private postBaseRepo: IPostBaseRepo,
    private commentBaseRepo: ICommentBaseRepo,
    private likeBaseRepo: ILikeBaseRepo,
    private savedBaseRepo: ISavedBaseRepo,
    private reportBaseRepo: IReportBaseRepo
  ) { }

  async filteredReportByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    try {
      const count = await this.reportBaseRepo.filteredReportByDateAndTextCount(searchText, startDate, endDate)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getAllReports(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IReportExt[]> {
    try {
      const reports = await this.reportBaseRepo.filteredReportByDateAndText(searchText, limit, startIndex, startDate, endDate)
      const postIds = reports.map(item => {
        if (item.contentType === 'post') return item.contentId
      }) as string[]
      const reportWithUsers = await addUserToIReport(reports)
      const posts = await this.postBaseRepo.findMultiplePostsByPostIds(postIds)
      const postWithUsers = await addUserToPosts(posts)
      const reportWithPost = postWithUsers.map((post) => {
        const report = reportWithUsers.find((report) => report.contentId === post._id);
        return {
          ...report,
          post
        }
      })
      return reportWithPost as IReportExt[]
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getSingleComment(commentId: string): Promise<ICommentExt | null> {
    try {
      const commentData = await this.commentBaseRepo.findCommentByCommentId(commentId)
      if (!commentData) return null
      const userAddedComment = await addUserToComments([commentData])
      return userAddedComment[0]
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getPostsCountByDate(startDate: string, endDate: string): Promise<{ date: string; count: number; }[]> {
    try {
      const postData = await this.postBaseRepo.findPostCountByDate(startDate, endDate)
      return postData
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFeedCounts(): Promise<{ totalPostsCount: number; totalCommentsCount: number; totalLikesCount: number; }> {
    try {
      const postsCount = await this.postBaseRepo.findPostCount()
      const commentsCount = await this.commentBaseRepo.totalCommentsCount()
      const likesCount = await this.likeBaseRepo.totalLikesCount()
      return {
        totalPostsCount: postsCount,
        totalCommentsCount: commentsCount,
        totalLikesCount: likesCount
      }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async popularPosts(limit: number): Promise<IPostExt[] | null> {
    try {
      const posts = await this.postBaseRepo.findPopularPosts(limit)
      if (!posts) return null
      const updatedPosts = await addUserToPosts(posts)
      return updatedPosts
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async totalPostsCount(): Promise<number> {
    try {
      const count = await this.postBaseRepo.findPostCount()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async totalCommentsCount(): Promise<number> {
    try {
      const count = await this.commentBaseRepo.totalCommentsCount()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async totalLikesCount(): Promise<number> {
    try {
      const count = await this.likeBaseRepo.totalLikesCount()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getUserCreatedPostCount(userId: string): Promise<number> {
    const count = await this.postBaseRepo.findPostCountByAuthorId(userId)
    return count
  }

  async getUserCreatedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[] | null> {
    const posts = await this.postBaseRepo.findPostsByAuthorId(userId, limit, startIndex)
    if (!posts) return null
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }


  async getSearchPostsCount(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    const count = await this.postBaseRepo.findPostCountBySearchText(searchText, startDate, endDate)
    return count
  }

  async getCommentCount(contentId: string): Promise<number> {
    const count = await Comment.countDocuments({ contentId: contentId })
    return count
  }

  async getCommentChildrenCount(contentId: string, parentId?: string): Promise<number> {
    const count = this.commentBaseRepo.findCommentsByParentIdCount(contentId, parentId)
    return count
  }



  async getPostCount(followeeIds?: string[]): Promise<number> {
    if (followeeIds) {
      const count = await this.postBaseRepo.findPostCountByFolloweeIds(followeeIds)
      return count
    }
    const count = await this.postBaseRepo.findPostCount()
    // const count = await getCachedPostCount()
    return count
  }

  async getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const endIndex = startIndex + limit
    // ! cache code
    // const { posts, isCacheExhausted } = await getPopularPostsFromCache(startIndex, endIndex)
    const posts = await this.postBaseRepo.findPosts(limit, startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  // ! need to implement way to get following userIds
  async getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const posts = await this.postBaseRepo.findPosts(limit, startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  async getPost(postId: string): Promise<IPostExt | null> {
    const post = await this.postBaseRepo.findPostByPostId(postId)
    if (!post) return null
    const updatedPost = await addUserToPost(post)
    return updatedPost
  }

  async searchPost(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IPostExt[] | null> {
    const posts = await this.postBaseRepo.findPostsBySearchText(searchText, limit, startIndex, startDate, endDate)
    if (!posts) return null
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts
  }

  async getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]> {
    const comments = await this.commentBaseRepo.findCommentsByContentId(contentId, limit, startIndex)
    if (!comments) return []
    const updatedComments = await addUserToComments(comments)
    return updatedComments
  }

  async getCommentChildren(contentId: string, limit: number, startIndex: number, parentId?: string): Promise<ICommentExt[]> {
    const comments = await this.commentBaseRepo.findCommentsByParentId(contentId, limit, startIndex, parentId)
    if (!comments) return []
    const updatedComments = await addUserToComments(comments)
    return updatedComments
  }

  async getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILike[]> {
    const likes = await this.likeBaseRepo.findLIkesByContentIdsAndType(contentIds, contentType)
    const updatedLikes = await addUserToLikes(likes)
    return updatedLikes
  }

  async getLike(contentId: string, contentType: ILike['contentType']): Promise<ILike | null> {
    const like = await this.likeBaseRepo.findLIkeByContentIdAndType(contentId, contentType)
    if (!like) return null
    const updatedLikes = await addUserToLike(like)
    return updatedLikes
  }

  async getUserSavedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[]> {
    try {
      const saved = await this.savedBaseRepo.findSavedPostsByUserId(userId, limit, startIndex)
      if (saved.length === 0) return []
      const postIds = saved.map(item => item.postId)
      const posts = await this.postBaseRepo.findMultiplePostsByPostIds(postIds)
      const updatedPosts = await addUserToPosts(posts)
      return updatedPosts as IPostExt[]
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getUserSavedPostsCount(userId: string): Promise<number> {
    try {
      const count = await this.savedBaseRepo.findSavedPostsByUserIdCount(userId)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default FeedRepo