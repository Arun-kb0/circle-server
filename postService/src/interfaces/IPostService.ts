import IComment from "./IComment";
import IPost from "./IPost";
import SvcFuncReturnType from '../constants/SvcReturnType'

interface IPostService {
  createPost(post: Partial<IPost>): SvcFuncReturnType<IPost>
  updatePost(postId:string , post: Partial<IPost>): SvcFuncReturnType<IPost>
  deletePost(postId: string): SvcFuncReturnType<{ postId: string }>
  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: IComment, postAuthorId: string, postId: string }>
}

export default IPostService