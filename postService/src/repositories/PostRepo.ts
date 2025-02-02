import IPost, { IPostExt } from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo'
import { publishMessage } from '../util/rabbitmq'
import { addPostToCache } from '../util/redisCache'
import { addUserToPost } from '../util/userClientFunctions'
import IPostBaseRepo from "../interfaces/IPostBaseRepo";

const QUEUE_NAME = 'post-popular'

class PostRepo implements IPostRepo {

  constructor(
    private postBaseRepo: IPostBaseRepo
  ) { }

  async create(post: Partial<IPost>): Promise<IPostExt | null> {
    const newPost = await this.postBaseRepo.createPost(post)
    if (!newPost) return null
    publishMessage(QUEUE_NAME, JSON.stringify(newPost))
    addPostToCache()
    const updatedPost = await addUserToPost(newPost)
    return updatedPost
  }

  async update(postId: string, post: Partial<IPost>): Promise<IPostExt | null> {
    const updatedPost = await this.postBaseRepo.updatePost(postId, post)
    if (!updatedPost) return null
    const mergedPost = await addUserToPost(updatedPost)
    return mergedPost
  }

  async delete(postId: string): Promise<{ postId: string; } | null> {
    const post = this.postBaseRepo.deletePost(postId)
    return post
  }

}

export default PostRepo