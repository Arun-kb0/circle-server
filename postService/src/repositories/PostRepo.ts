import IPost, { IPostExt } from '../interfaces/IPost';
import IPostRepo from '../interfaces/IPostRepo'
import { publishMessage } from '../util/rabbitmq'
import { addPostToCache } from '../util/redisCache'
import { addUserToPost } from '../util/userClientFunctions'
import IPostBaseRepo from "../interfaces/IPostBaseRepo";
import IReportBaseRepo from "../interfaces/IReportBaseRepo";
import ISavedBaseRepo from "../interfaces/ISavedBaseRepo";
import IReport from '../interfaces/IReport';
import ISaved from '../interfaces/ISaved';
import handleError from '../util/handleError';

const QUEUE_NAME = 'post-popular'

class PostRepo implements IPostRepo {

  constructor(
    private postBaseRepo: IPostBaseRepo,
    private reportBaseRepo: IReportBaseRepo,
    private savedBaseRepo: ISavedBaseRepo
  ) { }

  async reportPost(userId: string, contentId: string, contentType: IReport['contentType']): Promise<IReport | null> {
    try {
      // const isExits = await this.reportBaseRepo.isReportExits(userId, contentId, contentType)
      const isExits = await this.reportBaseRepo.findByUserIdAndContentId(userId, contentId, contentType)
      if (isExits) return isExits
      const reportData = await this.reportBaseRepo.createReport({ userId, contentId, contentType })
      if (contentType === 'post') await this.postBaseRepo.handleReportCount(contentId, true)
      return reportData
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async savePost(userId: string, postId: string): Promise<{ savedData: ISaved | null, savedPost: IPostExt | null }> {
    try {
      const isExits = await this.savedBaseRepo.isSavedExits(userId, postId)
      let savedData: ISaved | null = null
      if (isExits) {
        savedData = await this.savedBaseRepo.deleteByUserIdAndPostId(userId, postId)
      } else {
        savedData = await this.savedBaseRepo.createSaved({ userId, postId })
      }
      const savedPost = await this.postBaseRepo.findPostByPostId(postId)
      if (!savedPost) return { savedData, savedPost }
      const updatedPost = await addUserToPost(savedPost)
      return { savedData, savedPost: updatedPost }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

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