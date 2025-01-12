import IComment, { ICommentExt } from "./IComment";
import IPost, { IPostExt } from "./IPost";
import SvcFuncReturnType from '../constants/SvcReturnType'

interface IPostService {
  createPost(post: Partial<IPost>): SvcFuncReturnType<IPostExt>
  updatePost(postId: string, post: Partial<IPost>): SvcFuncReturnType<IPostExt>
  deletePost(postId: string): SvcFuncReturnType<{ postId: string }>
  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: ICommentExt, postAuthorId: string, postId: string }>
}

export default IPostService