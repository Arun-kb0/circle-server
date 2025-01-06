import express from 'express'
import { createComment, deleteComment, updateComment } from '../controller/commentController'

const router = express.Router()

router.route('/')
  .post(createComment)
  .patch(updateComment)
router.delete('/:commentId', deleteComment)

export default router