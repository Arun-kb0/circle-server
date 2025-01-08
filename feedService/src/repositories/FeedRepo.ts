import IComment from '../interfaces/IComment';
import IFeedRepo from '../interfaces/IFeedRepo'
import IPost from '../interfaces/IPost';
import { Post } from '../model/postModel'
import { Comment } from '../model/commentModel'

class FeedRepo implements IFeedRepo {

  async getGlobalPosts(limit: number, startIndex: number): Promise<IPost[]> {
    const posts = await Post.find().sort({ likesCount: -1 }).limit(limit).skip(startIndex)
    return posts
  }

  // ! need to implement way to get following userIds
  async getUserPosts(limit: number, startIndex: number): Promise<IPost[]> {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    return posts
  }

  async getPost(postId: string): Promise<IPost | null> {
    const post = await Post.findOne({ _id: postId })
    return post ? post.toObject() : null
  }

  async searchPost(searchText: string, limit: number, startIndex: number): Promise<IPost[] | null> {
    const query = {
      $or: [
        { tags: { $elemMatch: { $regex: searchText, $options: "i" } } },
        { desc: { $regex: searchText, $options: "i" } }
      ]
    };
    const post = await Post.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    return post
  }

  async getComments(contentId: string, limit: number, startIndex: number): Promise<IComment[]> {
    const comments = await Comment.find({ contentId }).sort({ likesCount: -1, replayCount: -1 }).limit(limit).skip(startIndex)
    return comments
  }


}