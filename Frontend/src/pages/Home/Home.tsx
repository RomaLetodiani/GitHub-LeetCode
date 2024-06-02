import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../../components/Card'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect } from 'react'
import Input from '../../components/UI/Input'
import { useInput } from '../../hooks/useInput'
import Button from '../../components/UI/Button'
import { gitHubServices, leetCodeServices } from '../../services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
const transitionVariants = (dimensions: { height: number; width: number }) => ({
  open: {
    clipPath: `circle(${dimensions.height * 3}px at 0px 0px)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: `circle(0px at ${dimensions.width / 2}px ${dimensions.height / 2}px)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
})

enum Page {
  GITHUB = '/github',
  LEETCODE = '/leetcode',
}

export const fetchProfileData = async (page: Page, userName: string) => {
  console.log('🚀 ~ fetchProfileData ~ userName:', userName)
  if (!userName) {
    return
  }
  switch (page) {
    case '/github':
      return await gitHubServices.getProfile({ userName }).then(({ data }) => {
        return data
      })
    case '/leetcode':
      return await leetCodeServices.getProfile({ userName }).then(({ data }) => {
        return data
      })
  }
}

const Home = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isLeetCode = pathname.includes('leetcode')
  const dimensions = useWindowSize()
  const userNameInput = useInput((value) => value.length > 0, ['userNameInput'])
  const queryClient = useQueryClient()

  const { mutate: fetchProfile } = useMutation({
    mutationFn: () => fetchProfileData(pathname as Page, userNameInput.value),
    onSuccess: (data) => {
      queryClient.setQueryData([`${pathname}-profile`, userNameInput.value], data)
    },
  })
  useEffect(() => {
    if (pathname === '/') {
      navigate('/github')
    }
    fetchProfileData(Page.GITHUB, userNameInput.value).then((data) => {
      queryClient.setQueryData(['/github-profile', userNameInput.value], data)
    })
    fetchProfileData(Page.LEETCODE, userNameInput.value).then((data) => {
      queryClient.setQueryData(['/leetcode-profile', userNameInput.value], data)
    })
  }, [])
  return (
    <motion.div
      className="relative flex justify-center items-center inset-0 w-full h-screen bg-github-gradient"
      initial={false}
      animate={isLeetCode ? 'open' : 'closed'}
      custom={dimensions}
    >
      <motion.div
        className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full bg-leetcode-gradient"
        variants={transitionVariants(dimensions)}
      />

      <Card>
        <Input placeholder={`${isLeetCode ? 'LeetCode' : 'GitHub'} Username`} {...userNameInput} />
        <Outlet />
        <Button onClick={() => fetchProfile()}>Search</Button>
      </Card>
    </motion.div>
  )
}

export default Home
