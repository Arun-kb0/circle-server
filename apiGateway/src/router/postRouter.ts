import express from 'express'
import {
  createPost, deletePost, 
  reportPost, savePost, updatePost
} from '../controller/postController'

const router = express.Router()


router.post('/', createPost)

router.post('/save', savePost)
router.post('/report', reportPost)

router.route('/:postId')
  .patch(updatePost)
  .delete(deletePost)

export default router

