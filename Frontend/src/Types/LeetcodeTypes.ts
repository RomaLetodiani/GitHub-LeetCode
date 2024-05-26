interface LeetCodeProfile {
  aboutMe: string
  location: string
  realName: string
  userAvatar: string
}

interface LeetCodeMatchedUser {
  username: string
  githubUrl: string
  twitterUrl: string
  linkedinUrl: string
  profile: LeetCodeProfile
}
