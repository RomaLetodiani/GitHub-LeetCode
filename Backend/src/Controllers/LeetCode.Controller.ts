import { Request, Response } from "express"
import LeetCodeServices from "../Services/LeetCode.Service"
class LeetCodeController {
  private LeetCodeServices: LeetCodeServices
  constructor() {
    this.LeetCodeServices = new LeetCodeServices()
  }

  public Profile = async (req: Request, res: Response) => {
    const { userName } = req.body

    if (!userName) {
      return res.status(400).json({ message: "Please provide a valid username" })
    }

    try {
      const profile = await this.LeetCodeServices.getProfile(userName)
      return res.status(200).json(profile)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return res.status(500).json({ message: "An unexpected error occurred" })
    }
  }

  public Calendar = (req: Request, res: Response) => {
    const { userName } = req.body

    if (!userName) {
      return res.status(400).json({ message: "Please provide a valid username" })
    }

    try {
      const calendar = this.LeetCodeServices.getCalendar(userName)
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
