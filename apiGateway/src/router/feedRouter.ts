import express from 'express'
import {
  getChildComments,
  getComments,
  getGlobalFeed, getPost, getPostLikedUsers,
  getSavedPosts,
  getUseCreatedPosts, getUserFeed,
  searchPosts
} from '../controller/feedController'


const router = express.Router()

router.get('/global-posts', getGlobalFeed)
router.get('/posts', getUserFeed)

router.get('/post', getPost)
router.get('/search-post', searchPosts)
router.get('/user-created-posts', getUseCreatedPosts)

// router.get('/comment', getComments)

router.get('/liked-users', getPostLikedUsers)

router.get('/saved', getSavedPosts)



export default router