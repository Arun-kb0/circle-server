import { PaginationComment, PaginationPost, SvcReturnType } from '../constants/SvcTypes'
import IComment, { ICommentExt } from './IComment'
import IPost, { IPostExt } from './IPost'

interface IFeedService {

  getGlobalFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>

  getPost(postId: string): SvcReturnType<IPostExt | null>
  searchPost(searchText: string, page: number): SvcReturnType<PaginationPost<IPostExt[] | null>>

  getComments(contentId: string, page: number): SvcReturnType<PaginationComment<ICommentExt[]>>
}

export default IFeedService
