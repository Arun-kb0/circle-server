import IComment, { ICommentExt } from '../interfaces/IComment';
import IPost, { IPostExt } from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo';
import IPostService from '../interfaces/IPostService'
import handleError from '../util/handleError'
import httpStatus from '../constants/httpStatus'
import SvcFuncReturnType from '../constants/SvcReturnType';

class PostService implements IPostService {

  constructor(
    private postRepo: IPostRepo
  ) { }

  async createPost(post: Partial<IPost>): SvcFuncReturnType<IPostExt> {
    try {
      const newPost = await this.postRepo.create(post)
      return { err: null, data: newPost }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updatePost(postId: string, post: Partial<IPost>): SvcFuncReturnType<IPostExt> {
    try {
      const updatedUser = await this.postRepo.update(postId, post)
      if (!updatedUser) return { err: httpStatus.NOT_FOUND, errMsg: 'post not found', data: null }
      return { err: null, data: updatedUser }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async deletePost(postId: string): SvcFuncReturnType<{ postId: string; }> {
    try {
      const deletedId = await this.postRepo.delete(postId)
      if (!deletedId) return { err: httpStatus.NOT_FOUND, errMsg: 'user not found', data: null }
      return { err: null, data: deletedId }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: ICommentExt; postAuthorId: string; postId: string; }> {
    throw new Error('Method not implemented.');
  }

}

export default PostService