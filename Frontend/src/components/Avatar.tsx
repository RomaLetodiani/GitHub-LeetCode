import { useQuery } from '@tanstack/react-query'
import Loading from './Loading'

type avatarProps = {
  url?: string
  alt?: string
  className: string
  userName?: string
  desc?: string
  loading?: boolean
  isError?: boolean
}

const Avatar = ({
  url,
  alt,
  className,
  userName,
  desc,
  loading = false,
  isError = false,
}: avatarProps) => {
  if (loading) {
    return <Loading />
  }

  if (!url) {
    return <div>Try Searching with the valid Username</div>
  }

  const { data: errorProfile } = useQuery({ queryKey: ['errorProfile'] })
  console.log('🚀 ~ errorProfile, isError:', errorProfile, isError)
  return (
    <div>
      <img src={url} alt={alt} className={className} />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">{userName}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  )
}

export default Avatar
