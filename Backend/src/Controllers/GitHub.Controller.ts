import { Request, Response } from "express"
import GitHubServices from "../Services/GitHub.Service"
class LeetCodeController {
  private GitHubServices: GitHubServices
  constructor() {
    this.GitHubServices = new GitHubServices()
  }

  public Profile = async (req: Request, res: Response) => {
    const { userName } = req.body

    if (!userName) {
      return res.status(400).json({ message: "Please provide a valid username" })
    }

    try {
      const profile = await this.GitHubServices.getProfile(userName)
      if (!profile) {
        throw new Error("User not found")
      }

      return res.status(200).json(profile)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return res.status(500).json({ message: "An unexpected error occurred" })
    }
  }

  public Calendar = async (req: Request, res: Response) => {
    const { userName, year } = req.body

    if (!userName) {
      return res.status(400).json({ message: "Please provide a valid username" })
    }

    if (year && typeof year !== "number") {
      return res.status(400).json({ message: "Please provide a valid year" })
    }

    try {
      const calendar = await this.GitHubServices.getCalendar(userName, year)
      return res.status(200).json(calendar)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return res.status(500).json({ message: "An unexpected error occurred" })
    }
  }
}

export default new LeetCodeController()
