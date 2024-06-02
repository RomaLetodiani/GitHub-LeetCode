import Avatar from '../../components/Avatar'
import { useDataQuery } from '../../hooks/useDataQuery'

const GitHub = () => {
  const profileData = useDataQuery()

  if (profileData.isLoading) return <div>Loading...</div>
  if (profileData.isError) return <div>Error...</div>
  return (
    <div>
      <Avatar
        className="w-32 h-32 rounded-full"
        url={profileData.avatarUrl}
        alt="GitHub Avatar Profile"
        desc={profileData.bio}
        userName={profileData.userName as string}
      />
    </div>
  )
}

export default GitHub
