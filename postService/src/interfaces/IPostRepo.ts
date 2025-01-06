import IPost from "./IPost"

interface IPostRepo {
  // ! move to feed service
  // getAll(limit: number, startIndex: number, startDate?: Date, endDate?: Date): Promise<IPost[]>
  // search(searchText: string, limit: number, startIndex: number): Promise<IPost[]>
  // getCount(limit: number, startIndex: number): Promise<{ count: number }>

  create(post: Partial<IPost>): Promise<IPost>
  update(postId: string, post: Partial<IPost>): Promise<IPost | null>
  delete(postId: string): Promise<{ postId: string } | null>
}

export default IPostRepo