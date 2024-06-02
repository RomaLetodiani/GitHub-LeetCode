export interface GitHubProfile {
  avatarUrl: string
  bio?: string
  company?: string
  contributionsCollection?: {
    contributionCalendar: {
      totalContributions: number
    }
  }
  email?: string
  location?: string
  repositories?: {
    totalCount: number
  }
  twitterUsername?: string
  websiteUrl?: string
}
