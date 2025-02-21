import IComment from '../interfaces/IComment'

interface ICommentBaseRepo {
  createComment(comment: Partial<IComment>): Promise<IComment | null>
  updateComment(commentId: string, comment: Partial<IComment>): Promise<IComment | null>
  deleteComment(commentId: string): Promise<IComment | null>
  handleCommentReplayCount(parentId: string, isInc: boolean): Promise<number | null>
}

export default ICommentBaseRepo