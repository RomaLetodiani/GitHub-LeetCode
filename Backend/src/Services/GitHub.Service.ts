import { githubAPI } from "../Utils/Axios"

class GitHubServices {
  public getProfile = async (userName: string) => {
    const query = `
      query ($userName: String! ) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions  # Total contributions
            }
          }
          repositories {
            totalCount  # Total number of repositories
          }
          twitterUsername  # Twitter handle
          bio  # Bio
          websiteUrl  # Website URL (if provided)
          company  # Company (if provided)
          email  # Email (if provided)
          location  # Location (if provided)
          avatarUrl  # Avatar URL
        }
      }
    `

    const variables = { userName }

    try {
      const response = await githubAPI.post("", { query, variables })
      if (response.data.errors) {
        console.error("GraphQL errors:", response.data.errors)
        throw new Error(response.data.errors[0].message || "An unexpected error occurred")
      }
      const { data } = response
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("An unexpected error occurred")
    }
  }

  public getCalendar = async (userName: string, year: number = 2024) => {
    const query = `query ($userName: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $userName) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
            totalContributions
              weeks {
                contributionDays {
                  count: contributionCount  # Renamed for clarity
                  date
                }
              }
            }
          }
        }
      }`
    const variables = { userName, from: `${year}-01-01T00:00:00Z`, to: `${year}-12-31T23:59:59Z` }

    try {
      const response = await githubAPI.post("", { query, variables })
      if (response.data.errors) {
        console.error("GraphQL errors:", response.data.errors)
        throw new Error(response.data.errors[0].message || "An unexpected error occurred")
      }
      const { data } = response
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("An unexpected error occurred")
    }
  }
}

export default GitHubServices
