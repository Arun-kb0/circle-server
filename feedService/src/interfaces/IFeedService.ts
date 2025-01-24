import { PaginationComment, PaginationPost, SvcReturnType } from '../constants/SvcTypes'
import { ICommentExt } from './IComment'
import ILike from './ILike'
import { IPostExt } from './IPost'

interface IFeedService {

  getGlobalFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserCreatedPosts(userId: string, page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  
  getPost(postId: string): SvcReturnType<{ post: IPostExt, like: ILike | null } | null>
  searchPost(searchText: string, page: number): SvcReturnType<PaginationPost<IPostExt[] | null>>

  getComments(contentId: string, page: number): SvcReturnType<PaginationComment<ICommentExt[]>>
}

export default IFeedService
