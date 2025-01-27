interface ILike {
  _id: string
  authorId: string
  contentId: string
  contentType: 'post' | 'story' | 'comment'
  updatedAt: string
  createdAt: string
}

export default ILike
