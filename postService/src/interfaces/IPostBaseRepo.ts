import IPost from './IPost'

interface IPostBaseRepo {
  createPost(post: Partial<IPost>): Promise<IPost | null>
  updatePost(postId: string, post: Partial<IPost>): Promise<IPost | null>
  deletePost(postId: string): Promise<{ postId: string } | null>

  handleReportCount(postId: string, insInc: boolean): Promise<IPost | null>
  findPostByPostId(postId: string) : Promise<IPost | null>
}

export default IPostBaseRepo