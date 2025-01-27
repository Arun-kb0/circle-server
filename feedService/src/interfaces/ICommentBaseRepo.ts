import IComment from './IComment'

interface ICommentBaseRepo {
  findCommentsByContentId(contentId: string, limit: number, startIndex: number): Promise<IComment[]>
}

export default ICommentBaseRepo