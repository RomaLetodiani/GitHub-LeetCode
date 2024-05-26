import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './UI/Button'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  const { pathname } = useLocation()
  const isLeetCode = pathname.includes('leetcode')
  return (
    <div className="bg-white shadow-lg rounded-lg z-10">
      <div className="flex gap-5 border-b py-3 px-5">
        <Link to={'leetcode'}>
          <Button
            className={twMerge(
              'font-bold',
              `${isLeetCode ? 'bg-leetcode-yellow' : 'bg-opacity-70'}`,
            )}
          >
            LeetCode
          </Button>
        </Link>
        <Link to={'github'}>
          <Button
            className={twMerge('font-bold', `${isLeetCode ? 'bg-opacity-70' : 'bg-github-purple'}`)}
          >
            GitHub
          </Button>
        </Link>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export default Card
