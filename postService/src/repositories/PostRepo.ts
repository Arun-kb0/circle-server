import IPost from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo'
import { Post } from '../model/postModel'

class PostRepo implements IPostRepo {

  async create(post: Partial<IPost>): Promise<IPost> {
    const newPost = await Post.create(post)
    return newPost
  }

  async update(postId: string, post: Partial<IPost>): Promise<IPost | null> {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $set: post },
      { new: true }
    )
    return updatedPost ? updatedPost.toObject() : null
  }

  async delete(postId: string): Promise<{ postId: string; } | null> {
    const post = await Post.findOneAndDelete({ _id: postId })
    return post ? { postId: post._id } : null
  }

}

export default PostRepo