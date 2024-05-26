import express from "express"
import LeetCodeController from "../Controllers/LeetCode.Controller"

const router = express.Router()

// LeetCode Routes

// POST /leetcode/profile
router.post("/profile", LeetCodeController.Profile)

// POST /leetcode/calendar
router.post("/calendar", LeetCodeController.Calendar)

export default router
