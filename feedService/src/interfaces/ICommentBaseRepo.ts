import IComment from './IComment'

interface ICommentBaseRepo {
  findCommentsByContentId(contentId: string, limit: number, startIndex: number): Promise<IComment[]>
  findCommentsByParentId(contentId: string, limit: number, startIndex: number, parentId?: string): Promise<IComment[]>

  findCommentsByContentIdCount(contentId: string): Promise<number>
  findCommentsByParentIdCount(contentId: string, parentId?: string): Promise<number>
}

export default ICommentBaseRepo