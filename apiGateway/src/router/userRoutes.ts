import express from "express";
import {
  blockUser, createUserBlockedUser,
  deleteUserBlockedUser, followUser, getAllUsers,
  getFollowers, getFollowing, getLiveUsers,
  getSuggestedPeople, getUser, getUserBlockedByBlockerAndBlockedId,
  getUserBlockedUsersByBlockerId, unblockUser,
  unFollowUser, updateUser
} from "../controller/userController";


const router = express.Router()


router.get('/all', getAllUsers)
router.patch('/', updateUser)

router.get('/user-blocked-users', getUserBlockedUsersByBlockerId)
router.get('/user-blocked-user', getUserBlockedByBlockerAndBlockedId)
router.post('/user-blocked-create', createUserBlockedUser)
router.delete('/user-blocked-delete', deleteUserBlockedUser)

// * accessible only to admins
router.post('/block', blockUser)
router.post('/unblock', unblockUser)

// * follow
router.post('/follow', followUser)
router.post('/unfollow', unFollowUser)
router.get('/followers', getFollowers)
router.get('/following', getFollowing)
router.get('/suggested-people', getSuggestedPeople)
router.get('/live-users', getLiveUsers)

// * route with params
router.get('/:userId', getUser)

export default router