import express from "express"
import LeetCodeController from "../Controllers/LeetCode.Controller"

const router = express.Router()

// LeetCode Routes

// GET /leetcode/profile
router.post("/profile", (req, res) => LeetCodeController.Profile)

// GET /leetcode/calendar
router.post("/calendar", (req, res) => LeetCodeController.Calendar)

export default router
