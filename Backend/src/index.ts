import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import LeetCodeRoutes from "./Routes/LeetCode.Routes"
import GitHubRoutes from "./Routes/GitHub.Routes"

// Create an Express application
const app = express()

// Load environment variables from .env file
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

// Define the default route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server")
})

// Import the routes
app.use("/leetcode", LeetCodeRoutes)
app.use("/github", GitHubRoutes)

// Start the server
const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server is running on port http://localhost:${PORT}`)
  }
})
