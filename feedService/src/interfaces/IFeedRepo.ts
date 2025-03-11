import { IPostExt } from '../interfaces/IPost'
import { ICommentExt } from '../interfaces/IComment'
import ILike, { ILikeExt } from './ILike'
import { IReportExt } from './IReport'

interface IFeedRepo {
  getSingleComment(commentId: string): Promise<ICommentExt | null>

  getSearchPostsCount(searchText: string, startDate?: string, endDate?: string): Promise<number>
  getPostCount(followeeIds?: string[]): Promise<number>
  getCommentCount(contentId: string): Promise<number>
  getCommentChildrenCount(contentId: string, parentId?: string): Promise<number>
  getUserCreatedPostCount(userId: string): Promise<number>

  getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getPost(postId: string): Promise<IPostExt | null>
  searchPost(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string,): Promise<IPostExt[] | null>
  getUserCreatedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[] | null>

  getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]>
  getCommentChildren(contentId: string, limit: number, startIndex: number, parentId?: string): Promise<ICommentExt[]>

  getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILikeExt[]>
  getLike(contentId: string, contentType: ILike['contentType']): Promise<ILikeExt | null>

  popularPosts(limit: number): Promise<IPostExt[] | null>
  totalPostsCount(): Promise<number>
  totalCommentsCount(): Promise<number>
  totalLikesCount(): Promise<number>
  getFeedCounts(): Promise<{ totalPostsCount: number, totalCommentsCount: number, totalLikesCount: number }>
  getPostsCountByDate(startDate: string, endDate: string): Promise<{ date: string, count: number }[]>

  getUserSavedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[]>
  getUserSavedPostsCount(userId: string): Promise<number>

  filteredReportByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number>
  getAllReports(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IReportExt[]>
}

export default IFeedRepo