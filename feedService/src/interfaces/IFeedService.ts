import { PaginationComment, PaginationPost, SvcReturnType } from '../constants/SvcTypes'
import IComment from './IComment'
import IPost, { IPostExt } from './IPost'

interface IFeedService {

  getGlobalFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>
  getUserFeed(page: number): SvcReturnType<PaginationPost<IPostExt[]>>

  getPost(postId: string): SvcReturnType<IPost | null>
  searchPost(searchText: string, page: number): SvcReturnType<PaginationPost<IPost[] | null>>

  getComments(contentId: string, page: number): SvcReturnType<PaginationComment<IComment[]>>
}

export default IFeedService
