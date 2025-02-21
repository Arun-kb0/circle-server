import IPost from "../../interfaces/IPost";
import IPostBaseRepo from "../../interfaces/IPostBaseRepo";
import handleError from '../../util/handleError'
import { Post } from '../../model/postModel'
import { convertIPostDbToIPost, convertIPostToIPostDb, convertToObjectId } from '../../util/converter'

class PostBaseRepo implements IPostBaseRepo {

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
      console.log(post)
      const convertedPost = convertIPostToIPostDb(post)
      console.log("convertedPost = ")
      console.log(convertedPost)

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