import SvcFuncReturnType from "../constants/SvcReturnType";
import IComment from "./IComment";



interface ICommentService {
  createComment(contentType: IComment["contentType"], contentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment>
  updateComment(commentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment | null>
  deleteComment(commentId: string): SvcFuncReturnType<{ commentId: string } | null>
}

export default ICommentService