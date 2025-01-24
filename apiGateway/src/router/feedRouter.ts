import express from 'express'
import {
  getComments,
  getGlobalFeed, getPost, getUseCreatedPosts, getUserFeed,
  searchPosts
} from '../controller/feedController'


const router = express.Router()

router.get('/global-posts', getGlobalFeed)
router.get('/posts', getUserFeed)

router.get('/post', getPost)
router.get('/search-post', searchPosts)
router.get('/user-created-posts', getUseCreatedPosts)

router.get('/comment', getComments)



export default router