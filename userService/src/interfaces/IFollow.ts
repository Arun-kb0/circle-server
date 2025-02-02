
interface IFollow {
  _id: string,
  userId: string
  targetUserId: string,
  relationType: "follower" | "followee"
  createdAt: string
  updatedAt: string
}

export default IFollow