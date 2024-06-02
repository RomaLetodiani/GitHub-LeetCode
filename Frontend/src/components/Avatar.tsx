type avatarProps = {
  url?: string
  alt?: string
  className: string
  userName?: string
  desc?: string
}

const Avatar = ({ url, alt, className, userName, desc }: avatarProps) => {
  return (
    <div>
      <img src={url} alt={alt} className={className} />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white">{userName}</h1>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  )
}

export default Avatar
