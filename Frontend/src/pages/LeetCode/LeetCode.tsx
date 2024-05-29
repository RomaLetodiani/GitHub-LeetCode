import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useInput } from '../../hooks/useInput'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { leetCodeServices } from '../../services'

const fetchLeetCodeProfile = async (userName: string) => {
  if (userName) {
    // Check if username is not empty
    return await leetCodeServices.getProfile({ userName }).then(({ data }) => {
      return data
    })
  }
}

const LeetCode = () => {
  const userNameInput = useInput((value) => value.length > 0)
  const queryClient = useQueryClient()

  const {
    mutate: fetchProfile,
    isPending: isLoadingProfile,
    error: errorProfile,
    data: profile,
  } = useMutation({
    mutationFn: fetchLeetCodeProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(['profile', userNameInput.value], data)
    },
  })

  const handleSearch = () => {
    fetchProfile(userNameInput.value)
  }

  return (
    <div>
      <Input placeholder="Leetcode Username" {...userNameInput} />
      <Button onClick={handleSearch}>Search</Button>
      {isLoadingProfile && <p>Loading...</p>}
      {errorProfile && <p>An error occurred: {errorProfile.message}</p>}
      {profile && (
        <div>
          <h3>Profile Data:</h3>
          <p>{profile?.matchedUser?.username}</p>
        </div>
      )}
    </div>
  )
}

export default LeetCode
