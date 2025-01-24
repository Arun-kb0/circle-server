import IPost, { IPostExt } from '../interfaces/IPost'
import IComment, { ICommentExt } from '../interfaces/IComment'
import ILike from './ILike'

interface IFeedRepo {

  getSearchPostsCount(searchText: string): Promise<number>
  getPostCount(followeeIds?: string[]): Promise<number>
  getCommentCount(contentId: string): Promise<number>
  getUserCreatedPostCount(userId: string): Promise<number>

  getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getPost(postId: string): Promise<IPostExt | null>
  searchPost(searchText: string, limit: number, startIndex: number): Promise<IPostExt[] | null>
  getUserCreatedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[] | null>

  getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]>

  getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILike[]>
  getLike(contentId: string, contentType: ILike['contentType']): Promise<ILike | null>
}

export default IFeedRepo