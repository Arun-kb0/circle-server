import express from "express";
import { getAllUsers, getUser } from "../controller/userController";

const router = express.Router()

router.get('/all', getAllUsers)
router.get('/:userId', getUser)


export default router