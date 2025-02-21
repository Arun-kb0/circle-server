import IComment, { ICommentExt } from '../interfaces/IComment'

interface ICommentRepo {
  create(comment: Partial<IComment>): Promise<ICommentExt | null>
  update(commentId: string, comment: Partial<IComment>): Promise<ICommentExt | null>
  delete(commentId: string): Promise<{ commentId: string } | null>
}

export default ICommentRepo