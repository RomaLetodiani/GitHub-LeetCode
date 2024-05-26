import axios from "axios"

class LeetCodeServices {
  public getProfile = async (userName: string) => {
    const query = `
      query ($userName: String!) {
        matchedUser(username: $userName) {
          username
          githubUrl
          twitterUrl
          linkedinUrl
          profile {
            userAvatar
            realName
            aboutMe
            location
          }
        }
      }
    `

    const variables = { userName }

    try {
      const response = await axios.post(
        "https://leetcode.com/graphql/",
        { query, variables },
        {
          headers: {
            "Content-Type": "application/json",
            referer: `https://leetcode.com/${userName}/`,
          },
        },
      )
      if (response.data.errors) {
        console.error("GraphQL errors:", response.data.errors)
        throw new Error(response.data.errors[0].message || "An unexpected error occurred")
      }
      const { data } = response
      return data
    } catch (error) {
      console.error("🚀 ~ LeetCodeServices ~ getProfile ~ error:", error)
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("An unexpected error occurred")
    }
  }

  public getCalendar = async (userName: string, year: number = 2024) => {
    const query = `query ($userName: String!, $year: Int!) {
      matchedUser(username: $userName) {
        userCalendar(year: $year) {
          activeYears
          streak
          totalActiveDays
          dccBadges {
            timestamp
            badge {
              name
              icon
            }
          }
          submissionCalendar
        }
      }
    }`
    const variables = { userName, year }

    try {
      const response = await axios.post(
        "https://leetcode.com/graphql/",
        { query, variables },
        {
          headers: {
            "Content-Type": "application/json",
            referer: `https://leetcode.com/${userName}/`,
          },
        },
      )
      if (response.data.errors) {
        console.error("GraphQL errors:", response.data.errors)
        throw new Error(response.data.errors[0].message || "An unexpected error occurred")
      }
      const { data } = response
      console.log("🚀 ~ LeetCodeServices ~ getCalendar= ~ data:", data)
      return data
    } catch (error) {
      console.error("🚀 ~ LeetCodeServices ~ getCalendar ~ error:", error)
      throw new Error("An unexpected error occurred")
    }
  }
}

export default LeetCodeServices
