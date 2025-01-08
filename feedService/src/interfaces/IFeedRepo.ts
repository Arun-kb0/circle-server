import IPost from '../interfaces/IPost'
import IComment from '../interfaces/IComment'

interface IFeedRepo {

  getGlobalPosts(limit: number, startIndex: number): Promise<IPost[]>
  getUserPosts(limit: number, startIndex: number): Promise<IPost[]>
  getPost(postId: string): Promise<IPost | null>
  searchPost(searchText: string, limit: number, startIndex: number): Promise<IPost[] | null>
  getComments(contentId: string, limit: number, startIndex: number): Promise<IComment[]>

}

export default IFeedRepo