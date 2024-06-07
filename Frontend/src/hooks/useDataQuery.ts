import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { LeetcodeUser } from '../Types/LeetcodeTypes'
import { GitHubProfile } from '../Types/GitHubTypes'

const initialProfileData: Partial<LeetcodeUser & GitHubProfile> = {
  avatarUrl: '',
  bio: '',
  company: '',
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: 0,
    },
  },
  email: '',
  githubUrl: '',
  linkedinUrl: '',
  location: '',
  repositories: {
    totalCount: 0,
  },
  twitterUrl: '',
  twitterUsername: '',
  username: '',
  websiteUrl: '',
  profile: {
    aboutMe: '',
    location: '',
    realName: '',
    userAvatar: '',
  },
}

export const useDataQuery = () => {
  const { pathname } = useLocation()
  const { data: userNameInput } = useQuery({ queryKey: ['userNameInput'] })
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`${pathname}-profile`, userNameInput],
    queryFn: (): Partial<LeetcodeUser & GitHubProfile> => profileData ?? initialProfileData,
    // queryFn: () => fetchProfileData(pathname, userNameInput as string),
    enabled: !!userNameInput,
  })

  if (!profileData) return { ...initialProfileData, userName: userNameInput, isLoading, isError }

  return { ...profileData, userName: userNameInput, isLoading, isError }
}
