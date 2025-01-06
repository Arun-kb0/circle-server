import IComment from '../interfaces/IComment'

interface ICommentRepo {
  create(comment: Partial<IComment>): Promise<IComment>
  update(commentId: string, comment: Partial<IComment>): Promise<IComment | null>
  delete(commentId: string): Promise<{ commentId: string } | null>
}

export default ICommentRepo