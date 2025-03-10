import ISaved from '../../interfaces/ISaved';
import ISavedBaseRepo from '../../interfaces/ISavedBaseRepo'
import { Saved } from '../../model/savedModel'
import handleError from '../../util/handleError'
import { convertISavedDbToISaved, convertISavedToISavedDb, convertToObjectId } from '../../util/converter'


class SavedBaseRepo implements ISavedBaseRepo {

  async isSavedExits(userId: string, postId: string): Promise<boolean> {
    try {
      const userObjId = convertToObjectId(userId)
      const postObjId = convertToObjectId(postId)
      const isExits = await Saved.exists({ userId: userObjId, postId: postObjId })
      return isExits ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createSaved(savedData: Partial<ISaved>): Promise<ISaved> {
    try {
      const convertedData = convertISavedToISavedDb(savedData)
      const newSavedData = await Saved.create(convertedData)
      return convertISavedDbToISaved(newSavedData)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteByUserIdAndPostId(userId: string, postId: string): Promise<ISaved | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const postObjId = convertToObjectId(postId)
      const deletedData = await Saved.findOneAndDelete({
        userId: userObjId,
        postId: postObjId
      }, { new: true }).exec()
      return deletedData ? convertISavedDbToISaved(deletedData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default SavedBaseRepo