import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../../components/Card'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect } from 'react'
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
const Home = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isLeetCode = pathname.includes('leetcode')
  const dimensions = useWindowSize()
  useEffect(() => {
    if (pathname === '/') {
      navigate('/github')
    }
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
        <Outlet />
      </Card>
    </motion.div>
  )
}

export default Home
