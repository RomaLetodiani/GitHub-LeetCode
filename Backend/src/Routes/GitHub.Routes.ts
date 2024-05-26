import express from "express"
import GitHubController from "../Controllers/GitHub.Controller"

const router = express.Router()

// GitHub Routes

// POST /github/profile
router.post("/profile", GitHubController.Profile)

// POST /github/calendar
router.post("/calendar", GitHubController.Calendar)

export default router
