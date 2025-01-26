import IComment from '../interfaces/IComment'

interface ICommentBaseRepo {
  createComment(comment: Partial<IComment>): Promise<IComment | null>
  updateComment(commentId: string, comment: Partial<IComment>): Promise<IComment | null>
  deleteComment(commentId: string): Promise<IComment | null>

}

export default ICommentBaseRepo