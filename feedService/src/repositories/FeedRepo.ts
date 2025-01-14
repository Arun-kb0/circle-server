import { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo'
import { IPostExt } from '../interfaces/IPost';
import { Post } from '../model/postModel'
import { Comment } from '../model/commentModel'
import { getCachedPostCount, getPopularPostsFromCache } from '../util/redisCache'
import { addUserToPosts, addUserToPost, addUserToComments } from '../util/userClientFunctions'
import { Like } from '../model/likeModel'
import ILike from '../interfaces/ILike';

class FeedRepo implements IFeedRepo {


  async getSearchPostsCount(searchText: string): Promise<number> {
    const query = {
      $or: [
        { tags: { $elemMatch: { $regex: searchText, $options: "i" } } },
        { desc: { $regex: searchText, $options: "i" } }
      ]
    };
    const count = await Post.countDocuments(query)
    return count
  }

  async getCommentCount(contentId: string): Promise<number> {
    const count = await Comment.countDocuments({ contentId: contentId })
    return count
  }

  async getPostCount(followeeIds?: string[]): Promise<number> {
    if (followeeIds) {
      const count = await Post.countDocuments({ authorId: { $in: followeeIds } })
      return count
    }
    const count = await Post.countDocuments()
    // const count = await getCachedPostCount()
    return count
  }

  async getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const endIndex = startIndex + limit
    // ! cache code
    // const { posts, isCacheExhausted } = await getPopularPostsFromCache(startIndex, endIndex)
    const posts = await Post.find().sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  // ! need to implement way to get following userIds
  async getUserPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts as IPostExt[]
  }

  async getPost(postId: string): Promise<IPostExt | null> {
    const post = await Post.findOne({ _id: postId })
    if (!post) return null
    const updatedPost = await addUserToPost(post.toObject())
    return updatedPost
  }

  async searchPost(searchText: string, limit: number, startIndex: number): Promise<IPostExt[] | null> {
    const query = {
      $or: [
        { tags: { $elemMatch: { $regex: searchText, $options: "i" } } },
        { desc: { $regex: searchText, $options: "i" } }
      ]
    };
    const posts = await Post.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    const updatedPosts = await addUserToPosts(posts)
    return updatedPosts
  }

  async getComments(contentId: string, limit: number, startIndex: number): Promise<ICommentExt[]> {
    const comments = await Comment.find({ contentId }).sort({ likesCount: -1, replayCount: -1 }).limit(limit).skip(startIndex)
    if (!comments) return []
    const updatedComments = await addUserToComments(comments)
    return updatedComments
  }

  async getLikes(contentIds: string[], contentType: ILike['contentType']): Promise<ILike[]> {
    const likes = await Like.find({ contentType, contentId: { $in: contentIds } })
    return likes
  }
  async getLike(contentId: string, contentType: ILike['contentType']): Promise<ILike | null> {
    const like = await Like.findOne({ contentType, contentId })
    return like ? like.toObject() : null
  }

}

export default FeedRepo