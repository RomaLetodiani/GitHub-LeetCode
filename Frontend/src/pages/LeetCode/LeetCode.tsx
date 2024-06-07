import Avatar from '../../components/Avatar'
import { useDataQuery } from '../../hooks/useDataQuery'

const LeetCode = () => {
  const profileData = useDataQuery()

  if (profileData.isLoading) return <div>Loading...</div>
  if (profileData.isError) return <div>Error...</div>
  return (
    <div>
      <Avatar
        className="w-32 h-32 rounded-full"
        url={profileData?.profile?.userAvatar}
        alt="leetCode Avatar Profile"
        desc={profileData?.profile?.aboutMe}
        userName={profileData.username}
      />
    </div>
  )
}

export default LeetCode
