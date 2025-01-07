import mongoose from 'mongoose';
import IPost from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo'
import { Post } from '../model/postModel'
import { publishMessage } from '../util/rabbitmq'
import { addPostToCache } from '../util/redisCache'

const QUEUE_NAME = 'post-popular'

class PostRepo implements IPostRepo {

  async create(post: Partial<IPost>): Promise<IPost> {
    const newPost = await Post.create(post)
    publishMessage(QUEUE_NAME, JSON.stringify(newPost) )
    addPostToCache()
    return newPost
  }

  async update(postId: string, post: Partial<IPost>): Promise<IPost | null> {
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error('Invalid postId: must be a valid ObjectId');
    }
    console.log(post)
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