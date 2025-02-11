import { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo'
import { IPostExt } from '../interfaces/IPost';
import { Post } from '../model/postModel'
import { Comment } from '../model/commentModel'
import { getCachedPostCount, getPopularPostsFromCache } from '../util/redisCache'
import { addUserToPosts, addUserToPost, addUserToComments, addUserToLikes, addUserToLike } from '../util/userClientFunctions'
import { Like } from '../model/likeModel'
import ILike from '../interfaces/ILike';
import IPostBaseRepo from '../interfaces/IPostBaseRepo'
import ICommentBaseRepo from '../interfaces/ICommentBaseRepo'
import ILikeBaseRepo from '../interfaces/ILikeBaseRepo'


class FeedRepo implements IFeedRepo {

  constructor(
    private postBaseRepo: IPostBaseRepo,
    private commentBaseRepo: ICommentBaseRepo,
    private likeBaseRepo: ILikeBaseRepo,
  ) { }

  async getUserCreatedPostCount(userId: string): Promise<number> {
    const count = await this.postBaseRepo.findPostCountByAuthorId(userId)
    return count
  }

  async getUserCreatedPosts(userId: string, limit: number, startIndex: number): Promise<IPostExt[] | null> {
    const posts = await this.postBaseRepo.findPostsByAuthorId(userId, limit, startIndex)
    if (!posts) return null
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }


  async getSearchPostsCount(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    const count = await this.postBaseRepo.findPostCountBySearchText(searchText, startDate, endDate)
    return count
  }

  async getCommentCount(contentId: string): Promise<number> {
    const count = await Comment.countDocuments({ contentId: contentId })
    return count
  }

  async getPostCount(followeeIds?: string[]): Promise<number> {
    if (followeeIds) {
      const count = await this.postBaseRepo.findPostCountByFolloweeIds(followeeIds)
      return count
    }
    const count = await this.postBaseRepo.findPostCount()
    // const count = await getCachedPostCount()
    return count
  }

  async getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const endIndex = startIndex + limit
    // ! cache code
    // const { posts, isCacheExhausted } = await getPopularPostsFromCache(startIndex, endIndex)
    const posts = await this.postBaseRepo.findPosts(limit, startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  // ! need to implement way to get following userIds
  async getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const posts = await this.postBaseRepo.findPosts(limit, startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  async getPost(postId: string): Promise<IPostExt | null> {
    const post = await this.postBaseRepo.findPostByPostId(postId)
    if (!post) return null
    const updatedPost = await addUserToPost(post)
    return updatedPost
  }

  async searchPost(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IPostExt[] | null> {
    const posts = await this.postBaseRepo.findPostsBySearchText(searchText, limit, startIndex, startDate, endDate)
    if (!posts) return null
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts
  }

  async getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]> {
    const comments = await this.commentBaseRepo.findCommentsByContentId(contentId, limit, startIndex)
    if (!comments) return []
    const updatedComments = await addUserToComments(comments)
    return updatedComments
  }

  async getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILike[]> {
    const likes = await this.likeBaseRepo.findLIkesByContentIdsAndType(contentIds, contentType)
    const updatedLikes = await addUserToLikes(likes)
    return updatedLikes
  }

  async getLike(contentId: string, contentType: ILike['contentType']): Promise<ILike | null> {
    const like = await this.likeBaseRepo.findLIkeByContentIdAndType(contentId, contentType)
    if(!like) return null
    const updatedLikes = await addUserToLike(like)
    return updatedLikes
  }

}

export default FeedRepo