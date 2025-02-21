interface IPost {
  _id: string,
  desc?: string
  tags: string[]
  mediaType: 'image' | 'video' | 'text',
  media: string[],
  authorId: string,
  status: 'active' | 'deleted' | 'blocked'
  likesCount: number
  reportsCount: number
  commentCount: number
  shareCount: number
  updatedAt: string
  createdAt: string
}

export interface IPostExt extends IPost {
  authorName: string | undefined
  authorImage: string | undefined
}

export default IPost
