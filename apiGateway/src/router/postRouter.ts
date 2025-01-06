import express from 'express'
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/postController'

const router = express.Router()

router.get('/all', getAllPosts)
router.route('/')
  .post(createPost)
  .patch(updatePost)
router.delete('/:postId',deletePost)

export default router