import IComment, { ICommentExt } from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo'
import IPost, { IPostExt } from '../interfaces/IPost';
import { Post } from '../model/postModel'
import { Comment } from '../model/commentModel'
import { getPopularPostsFromCache } from '../util/redisCache'
import { addUserToPosts, addUserToPost, addUserToComments } from '../util/userClientFunctions'

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
    if (!followeeIds) {
      const count = await Post.countDocuments()
      return count
    }
    const count = await Post.countDocuments({ authorId: { $in: followeeIds } })
    return count
  }

  async getGlobalPosts(limit: number, startIndex: number): Promise<IPostExt[]> {
    const endIndex = startIndex + limit
    const { posts: postsInCache, isCacheExhausted } = await getPopularPostsFromCache(startIndex, endIndex)
    if (isCacheExhausted) {
      const posts = await Post.find().sort({ likesCount: -1 }).limit(limit).skip(startIndex)
      const updatedPosts = await addUserToPosts(posts)
      return updatedPosts as IPostExt[]
    }

    const dbStartIndex = Math.max(0, startIndex - postsInCache.length)
    const dbPosts = await Post.find().sort({ likesCount: -1 }).limit(limit).skip(dbStartIndex)
    const uniquePosts = dbPosts.filter(
      dbPost => !postsInCache.some(cachePost => cachePost._id === dbPost._id)
    )
    const updatedPosts = await addUserToPosts([...postsInCache, ...uniquePosts])
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


}

export default FeedRepo