import IPost from "../../interfaces/IPost";
import IPostBaseRepo from "../../interfaces/IPostBaseRepo";
import handleError from '../../util/handleError'
import { IPostDb, Post } from '../../model/postModel'
import { convertIPostDbToIPost, convertIPostToIPostDb, convertToObjectId, stringToDate } from '../../util/converter'
import { FilterQuery } from "mongoose";

class PostBaseRepo implements IPostBaseRepo {

  async findPostCount(): Promise<number> {
    try {
      const count = await Post.countDocuments()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostCountBySearchText(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    try {
      let query: FilterQuery<IPostDb> = {}
      if (searchText.trim() !== '') {
        query.$or = [
          { tags: { $elemMatch: { $regex: searchText, $options: 'i' } } },
          { desc: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = new Date(startDate);
        }
        if (endDate) {
          query.createdAt.$lte = new Date(endDate);
        }
      }
      const count = await Post.countDocuments(query)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostCountByFolloweeIds(followeeIds: string[]): Promise<number> {
    try {
      const count = await Post.countDocuments({ authorId: { $in: followeeIds } })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostCountByAuthorId(userId: string): Promise<number> {
    try {
      const count = await Post.countDocuments({ authorId: userId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPosts(limit: number, startIndex: number): Promise<IPost[]> {
    try {
      const posts = await Post.find().sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      const convertedPosts = posts.map(post => convertIPostDbToIPost(post))
      return convertedPosts
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostByPostId(postId: string): Promise<IPost | null> {
    try {
      const postObjId = convertToObjectId(postId)
      const post = await Post.findOne({ _id: postObjId })
      return post ? convertIPostDbToIPost(post) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostsBySearchText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IPost[] | null> {
    try {
      console.log('\n findPostsBySearchText')
      console.log(startDate, endDate, searchText)
      let query: FilterQuery<IPostDb> = {}
      if (searchText.trim() !== '') {
        query.$or = [
          { tags: { $elemMatch: { $regex: searchText, $options: 'i' } } },
          { desc: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = startDate
        }
        if (endDate) {
          query.createdAt.$lte = endDate
        }
      }
      console.log(query)
      const posts = await Post.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      console.log('posts length', posts.length)
      const convertedPosts = posts.map(post => convertIPostDbToIPost(post))
      return convertedPosts
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPostsByAuthorId(userId: string, limit: number, startIndex: number): Promise<IPost[] | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const posts = await Post.find({ authorId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      const convertedPosts = posts.map(post => convertIPostDbToIPost(post))
      return convertedPosts
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  


}

export default PostBaseRepo