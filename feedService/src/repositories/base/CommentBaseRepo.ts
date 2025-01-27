import IComment from '../../interfaces/IComment';
import ICommentBaseRepo from '../../interfaces/ICommentBaseRepo'
import handleError from '../../util/handleError';
import { Comment } from '../../model/commentModel';
import { convertICommentDbToIComment } from '../../util/converter';


class CommentBaseRepo implements ICommentBaseRepo {

  async findCommentsByContentId(contentId: string, limit: number, startIndex: number): Promise<IComment[]> {
    try {
      const comments = await Comment.find({ contentId }).sort({ likesCount: -1, replayCount: -1 }).limit(limit).skip(startIndex)
      const convertedComments = comments.map(comment => convertICommentDbToIComment(comment))
      return convertedComments
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default CommentBaseRepo