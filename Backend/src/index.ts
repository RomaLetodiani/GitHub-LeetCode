import dotenv from "dotenv"
import express from "express"

// Load environment variables from .env file
dotenv.config()

// Create an Express application
const app = express()

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, world!")
})

// Start the server
const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server is running on port http://localhost:${PORT}`)
  }
})
