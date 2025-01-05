import IComment from "./IComment";
import IPost from "./IPost";

export type SvcFuncReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

interface IPostService {
  createPost(post: Partial<IPost>): SvcFuncReturnType<IPost>
  updatePost(post: Partial<IPost>): SvcFuncReturnType<IPost>
  deletePost(postId: string): SvcFuncReturnType<{ postId: string }>
  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: IComment, postAuthorId: string, postId: string }>
}

export default IPostService