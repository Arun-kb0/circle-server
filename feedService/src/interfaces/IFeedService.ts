import { PaginationComment, PaginationPost, PaginationReports, PaginationSavedPost, PaginationSearchPost, SvcReturnType } from '../constants/SvcTypes'
import { ICommentExt } from './IComment'
import ILike from './ILike'
import { IPostExt } from './IPost'
import { IReportExt } from './IReport'

interface IFeedService {
  getSingleComment(commentId: string): SvcReturnType<ICommentExt | null>

  getGlobalFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserCreatedPosts(userId: string, page: number): SvcReturnType<PaginationPost<IPostExt[]>>

  getPost(postId: string): SvcReturnType<{ post: IPostExt, like: ILike | null } | null>
  searchPost(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<PaginationSearchPost>

  getComments(contentId: string, page: number): SvcReturnType<PaginationComment<ICommentExt[]>>
  getCommentChildren(contentId: string, page: number, parentId?: string): SvcReturnType<PaginationComment<ICommentExt[]>>

  popularPosts(limit: number): SvcReturnType<IPostExt[] | null>
  totalPostsCount(): SvcReturnType<number>
  totalCommentsCount(): SvcReturnType<number>
  totalLikesCount(): SvcReturnType<number>
  getFeedCounts(): SvcReturnType<{ totalPostsCount: number; totalCommentsCount: number; totalLikesCount: number; }>
  getPostsCountByDate(startDate: string, endDate: string): SvcReturnType<{ date: string, count: number }[]>

  getUserSavedPosts(userId: string, page: number): SvcReturnType<PaginationSavedPost>
  getAllReports(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<PaginationReports>
}

export default IFeedService
