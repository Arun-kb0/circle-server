import express from 'express'
import { like, unlike } from '../controller/likeController'

const router = express.Router()

router.post('/', like)
router.delete('/:contentId', unlike)

export default router