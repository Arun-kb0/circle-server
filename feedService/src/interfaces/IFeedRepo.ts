import IPost, { IPostExt } from '../interfaces/IPost'
import IComment from '../interfaces/IComment'

interface IFeedRepo {

  getSearchPostsCount(searchText: string): Promise<number>
  getPostCount(followeeIds?: string[]): Promise<number>
  getCommentCount(contentId: string): Promise<number>

  getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]>
  getPost(postId: string): Promise<IPost | null>
  searchPost(searchText: string, limit: number, startIndex: number): Promise<IPost[] | null>
  getComments(contentId: string, limit: number, startIndex: number): Promise<IComment[]>

}

export default IFeedRepo