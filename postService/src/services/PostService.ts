import IComment from '../interfaces/IComment';
import IPost from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo';
import IPostService, { SvcFuncReturnType } from '../interfaces/IPostService'

class PostService implements IPostService {

  constructor(
    private postRepo: IPostRepo
  ) {}

  createPost(post: Partial<IPost>): SvcFuncReturnType<IPost> {
    throw new Error('Method not implemented.');
  }
  updatePost(post: Partial<IPost>): SvcFuncReturnType<IPost> {
    throw new Error('Method not implemented.');
  }
  deletePost(postId: string): SvcFuncReturnType<{ postId: string; }> {
    throw new Error('Method not implemented.');
  }
  commentPost(comment: string, commentAuthorId: string, postId: string): SvcFuncReturnType<{ comment: IComment; postAuthorId: string; postId: string; }> {
    throw new Error('Method not implemented.');
  }

}

export default PostService