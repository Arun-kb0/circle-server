import IPost from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo'

class PostRepo implements IPostRepo {

  create(post: Partial<IPost>): Promise<IPost> {
    throw new Error('Method not implemented.');
  }
  update(postId: string, post: Partial<IPost>): Promise<IPost> {
    throw new Error('Method not implemented.');
  }
  delete(postId: string): Promise<{ postId: string; }> {
    throw new Error('Method not implemented.');
  }
  
}

export default PostRepo