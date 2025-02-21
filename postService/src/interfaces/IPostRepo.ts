import IPost, { IPostExt } from "./IPost"

interface IPostRepo {
  create(post: Partial<IPost>): Promise<IPostExt | null>
  update(postId: string, post: Partial<IPost>): Promise<IPostExt | null>
  delete(postId: string): Promise<{ postId: string } | null>
}

export default IPostRepo