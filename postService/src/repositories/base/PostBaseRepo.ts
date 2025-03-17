import IPost from "../../interfaces/IPost";
import IPostBaseRepo from "../../interfaces/IPostBaseRepo";
import handleError from '../../util/handleError'
import { Post } from '../../model/postModel'
import { convertIPostDbToIPost, convertIPostToIPostDb, convertToObjectId } from '../../util/converter'

class PostBaseRepo implements IPostBaseRepo {

  async findPostByPostId(postId: string): Promise<IPost | null> {
    try {
      const postObjId = convertToObjectId(postId)
      const updatedPost = await Post.findOne({ _id: postObjId })
      return updatedPost ? convertIPostDbToIPost(updatedPost) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async handleReportCount(postId: string, isInc: boolean): Promise<IPost | null> {
    try {
      const count = isInc ? 1 : -1
      const postObjId = convertToObjectId(postId)
      const updatedPost = await Post.findOneAndUpdate(
        { _id: postObjId },
        { $inc: { reportsCount: count } },
        { new: true }
      )
      return updatedPost ? convertIPostDbToIPost(updatedPost) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createPost(post: Partial<IPost>): Promise<IPost | null> {
    try {
      const newPost = await Post.create(post)
      return convertIPostDbToIPost(newPost)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updatePost(postId: string, post: Partial<IPost>): Promise<IPost | null> {
    try {
      const postIdObj = convertToObjectId(postId)
      const convertedPost = convertIPostToIPostDb(post)
      const updatedPost = await Post.findOneAndUpdate(
        { _id: postIdObj },
        { $set: convertedPost },
        { new: true }
      )
      return updatedPost ? convertIPostDbToIPost(updatedPost) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deletePost(postId: string): Promise<{ postId: string; } | null> {
    try {
      const postIdObj = convertToObjectId(postId)
      const post = await Post.findOneAndDelete({ _id: postIdObj })
      return post ? { postId: post._id.toString() } : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }



}

export default PostBaseRepo