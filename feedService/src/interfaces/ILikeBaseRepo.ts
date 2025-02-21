import ILike from './ILike'

interface ILikeBaseRepo {
  findLIkesByContentIdsAndType(contentIds: string[], contentType: ILike['contentType']): Promise<ILike[]>
  findLIkeByContentIdAndType(contentId: string, contentType: ILike['contentType']): Promise<ILike | null>
}

export default ILikeBaseRepo