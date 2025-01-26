import IPost from './IPost'

interface IPostBaseRepo {
  createPost(post: Partial<IPost>): Promise<IPost | null>
  updatePost(postId: string, post: Partial<IPost>): Promise<IPost | null>
  deletePost(postId: string): Promise<{ postId: string } | null>
}

export default IPostBaseRepo