import express from "express"
import LeetCodeController from "../Controllers/LeetCode.Controller"

const router = express.Router()

// LeetCode Routes

// GET /leetcode/profile
router.post("/profile", LeetCodeController.Profile)

// GET /leetcode/calendar
router.post("/calendar", LeetCodeController.Calendar)

export default router
