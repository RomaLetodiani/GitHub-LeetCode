import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const token = process.env.GITHUB_TOKEN
export const githubAPI = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
