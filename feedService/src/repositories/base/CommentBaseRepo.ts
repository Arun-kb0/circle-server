import IComment from '../../interfaces/IComment';
import ICommentBaseRepo from '../../interfaces/ICommentBaseRepo'
import handleError from '../../util/handleError';
import { Comment, ICommentDb } from '../../model/commentModel';
import { convertICommentDbToIComment, convertToObjectId } from '../../util/converter';
import { FilterQuery } from 'mongoose';


class CommentBaseRepo implements ICommentBaseRepo {

  async totalCommentsCount(): Promise<number> {
    try {
      const count = await Comment.countDocuments()      
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findCommentsByContentId(contentId: string, limit: number, startIndex: number): Promise<IComment[]> {
    try {
      const comments = await Comment.find({ contentId, parentId: undefined })
        .sort({ likesCount: -1, replayCount: -1 })
        .limit(limit)
        .skip(startIndex)
      const convertedComments = comments.map(comment => convertICommentDbToIComment(comment))
      return convertedComments
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findCommentsByContentIdCount(contentId: string): Promise<number> {
    try {
      const count = await Comment.countDocuments({ contentId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findCommentsByParentId(contentId: string, limit: number, startIndex: number, parentId?: string): Promise<IComment[]> {
    try {
      const query: FilterQuery<ICommentDb> = {
        contentId: convertToObjectId(contentId)
      }
      if (parentId) query.parentId = convertToObjectId(parentId)

      const comments = await Comment.find(query)
        .sort({ likesCount: -1, replayCount: -1 })
        .limit(limit)
        .skip(startIndex)
      const convertedComments = comments.map(comment => convertICommentDbToIComment(comment))
      return convertedComments
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findCommentsByParentIdCount(contentId: string, parentId: string): Promise<number> {
    try {
      const query: FilterQuery<ICommentDb> = {
        contentId: convertToObjectId(contentId)
      }
      if (parentId) query.parentId = convertToObjectId(parentId)
     
      const count = await Comment.countDocuments(query)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default CommentBaseRepo