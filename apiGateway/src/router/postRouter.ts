import express from 'express'
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/postController'

const router = express.Router()


router.get('/all', getAllPosts)
router.post('/', createPost)
router.route('/:postId')
  .patch(updatePost)
  .delete(deletePost)

export default router

