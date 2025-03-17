import IPost, { IPostExt } from "./IPost"
import IReport from "./IReport"
import ISaved from "./ISaved"

interface IPostRepo {
  create(post: Partial<IPost>): Promise<IPostExt | null>
  update(postId: string, post: Partial<IPost>): Promise<IPostExt | null>
  delete(postId: string): Promise<{ postId: string } | null>

  reportPost(userId: string, contentId: string, contentType: IReport['contentType']): Promise<IReport | null>
  savePost(userId: string, postId: string): Promise<{ savedData: ISaved | null, savedPost: IPostExt | null }>
}

export default IPostRepo