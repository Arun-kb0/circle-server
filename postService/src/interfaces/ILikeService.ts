import ILike from "./ILike"
import SvcFuncReturnType from '../constants/SvcReturnType'

interface ILikeService {
  like(contentId: string, contentType: ILike["contentType"], authorId: string): SvcFuncReturnType<ILike>
  unlike(authorId: string, contentId: string): SvcFuncReturnType<ILike>
}

export default ILikeService