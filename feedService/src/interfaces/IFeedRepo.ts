import IPost, { IPostExt } from '../interfaces/IPost'
import IComment, { ICommentExt } from '../interfaces/IComment'

interface IFeedRepo {

  getSearchPostsCount(searchText: string): Promise<number>
  getPostCount(followeeIds?: string[]): Promise<number>
  getCommentCount(contentId: string): Promise<number>

  getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getPost(postId: string): Promise<IPostExt | null>
  searchPost(searchText: string, limit: number, startIndex: number): Promise<IPostExt[] | null>
  getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]>

}

export default IFeedRepo