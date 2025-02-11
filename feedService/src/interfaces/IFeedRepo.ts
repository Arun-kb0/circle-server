import { IPostExt } from '../interfaces/IPost'
import { ICommentExt } from '../interfaces/IComment'
import ILike, { ILikeExt } from './ILike'

interface IFeedRepo {

  getSearchPostsCount(searchText: string, startDate?: string, endDate?: string): Promise<number>
  getPostCount(followeeIds?: string[]): Promise<number>
  getCommentCount(contentId: string): Promise<number>
  getUserCreatedPostCount(userId: string): Promise<number>

  getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getPost(postId: string): Promise<IPostExt | null>
  searchPost(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string,): Promise<IPostExt[] | null>
  getUserCreatedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[] | null>

  getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]>

  getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILikeExt[]>
  getLike(contentId: string, contentType: ILike['contentType']): Promise<ILikeExt | null>
}

export default IFeedRepo