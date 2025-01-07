import ILike from '../interfaces/ILike'

interface ILikeRepo {
  handleCount(contentType: ILike["contentType"] | undefined, contentId: string, isInc: boolean): Promise<boolean>

  checkIsLiked(authorId: string, contentId: string): Promise<boolean>
  like(like: Partial<ILike>): Promise<ILike>
  unlike(authorId: string, contentId: string): Promise<ILike | null>
}

export default ILikeRepo  