
interface IReport {
  _id: string
  userId: string
  contentId: string
  contentType: 'post' | 'story' | 'user' | 'comment'
  description?: string 
  createdAt: string
  updatedAt: string
}

export default IReport

