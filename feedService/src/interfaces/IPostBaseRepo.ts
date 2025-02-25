import IPost from './IPost'

interface IPostBaseRepo {
  findPostCountBySearchText(searchText: string, startDate?: string, endDate?: string): Promise<number>
  findPostCountByFolloweeIds(followeeIds?: string[]): Promise<number>
  findPostCountByAuthorId(userId: string): Promise<number>
  findPostCount(): Promise<number>

  findPosts(limit: number, startIndex: number): Promise<IPost[]>
  findPostByPostId(postId: string): Promise<IPost | null>
  findPostsBySearchText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IPost[] | null>
  findPostsByAuthorId(userId: string, limit: number, startIndex: number): Promise<IPost[] | null>

  findPopularPosts(limit: number): Promise<IPost[] | null>
  findPostCountByDate(startDate:string,endDate:string): Promise<{date:string,count:number}[]>
}

export default IPostBaseRepo