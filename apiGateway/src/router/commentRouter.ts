import express from 'express'
import { createComment, deleteComment, updateComment } from '../controller/commentController'
import { getComments, getChildComments } from '../controller/feedController'

const router = express.Router()

router.route('/')
  .get(getComments)
  .post(createComment)
  .patch(updateComment)

router.get('/child', getChildComments)  

router.delete('/:commentId', deleteComment)

export default router