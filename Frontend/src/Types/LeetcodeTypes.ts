export interface LeetcodeUser {
  githubUrl: string
  linkedinUrl: string
  profile: LeetCodeProfile
  twitterUrl: string
  username: string
}

interface LeetCodeProfile {
  aboutMe: string
  location: string
  realName: string
  userAvatar: string
}
