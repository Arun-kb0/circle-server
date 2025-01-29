
interface ILike {
  _id: string
  authorId: string
  contentId: string
  contentType: 'post' | 'story' | 'comment'
  updatedAt: string
  createdAt: string
}

export interface ILikeExt extends ILike {
  authorName?: string
  authorImage?: string
}

export default ILike
