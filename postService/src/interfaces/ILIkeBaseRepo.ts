import ILike from '../interfaces/ILike'

interface ILikeBaseRepo {
  checkIsLiked(authorId: string, contentId: string): Promise<boolean>
  like(like: Partial<ILike>): Promise<ILike>
  unlike(authorId: string, contentId: string): Promise<ILike | null>
}

export default ILikeBaseRepo  