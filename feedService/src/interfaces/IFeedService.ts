import SvcReturnType from '../constants/SvcReturnType'
import IComment from './IComment'
import IPost from './IPost'

interface IFeedService {

  getGlobalFeed(): SvcReturnType<IPost[]>
  getUserFeed(): SvcReturnType<IPost[]>
  getPost(): SvcReturnType<IPost>

  getComments(contentId:string) :SvcReturnType<IComment[]>
}

export default IFeedService
