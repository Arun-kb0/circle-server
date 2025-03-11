import express from 'express'
import {
  updatePost, searchPosts, deletePost,
  getPopularPosts, getFeedCounts, getPostCountByDate,
  getFilteredReports
} from '../../controller/admin/postAdminController'
import {
  getAllUsers, blockUser, unblockUser,
  countUsers, getUserCountDetails
} from '../../controller/admin/userAdminController'
import authorizeAdmin from '../../middleware/authorizeAdmin'

const router = express.Router()

// * admin authorization middleware
router.use(authorizeAdmin)

// * user
router.get('/user/all', getAllUsers)
router.post('/user/block', blockUser)
router.post('/user/unblock', unblockUser)
router.get('/user/count', countUsers)
router.get('/user/line-chart', getUserCountDetails)

// * post
router.get('/post/popular', getPopularPosts)
router.get('/post/feed-counts', getFeedCounts)
router.get('/post/line-chart', getPostCountByDate)

router.get('/post/search-post', searchPosts)
router.route('/post/:postId')
  .patch(updatePost)
  .delete(deletePost)

router.get('/report/filtered', getFilteredReports)

export default router

