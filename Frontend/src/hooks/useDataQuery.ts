import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { fetchProfileData } from '../pages/Home/Home'

export const useDataQuery = () => {
  const { pathname } = useLocation()
  const { data: userNameInput } = useQuery({ queryKey: ['userNameInput'] })
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`${pathname}-profile`, userNameInput],
    queryFn: () => fetchProfileData(pathname, userNameInput as string),
  })

  return { ...profileData, userName: userNameInput, isLoading, isError }
}
