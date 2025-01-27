import IPost from './IPost'

interface IPostBaseRepo {
  findPostCountBySearchText(searchText: string): Promise<number>
  findPostCountByFolloweeIds(followeeIds?: string[]): Promise<number>
  findPostCountByAuthorId(userId: string): Promise<number>
  findPostCount(): Promise<number>

  findPosts(limit: number, startIndex: number): Promise<IPost[]>
  findPostByPostId(postId: string): Promise<IPost | null>
  findPostsBySearchText(searchText: string, limit: number, startIndex: number): Promise<IPost[] | null>
  findPostsByAuthorId(userId: string, limit: number, startIndex: number): Promise<IPost[] | null>
}

export default IPostBaseRepo