import { ICommentExt } from "./IComment";
import IPost, { IPostExt } from "./IPost";
import SvcFuncReturnType from '../constants/SvcReturnType'
import IReport from "./IReport";
import ISaved from "./ISaved";

interface IPostService {
  createPost(post: Partial<IPost>): SvcFuncReturnType<IPostExt>
  updatePost(postId: string, post: Partial<IPost>): SvcFuncReturnType<IPostExt>
  deletePost(postId: string): SvcFuncReturnType<{ postId: string }>
  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: ICommentExt, postAuthorId: string, postId: string }>

  reportPost(userId: string, contentId: string, contentType: IReport['contentType']): SvcFuncReturnType<IReport | null>
  savePost(userId: string, postId: string): SvcFuncReturnType<{ savedData: ISaved | null, savedPost: IPostExt | null }>
}

export default IPostService