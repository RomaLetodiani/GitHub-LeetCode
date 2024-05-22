import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'
import LeetCode from '../pages/LeetCode/LeetCode'
import GitHub from '../pages/GitHub/GitHub'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/github',
        element: <GitHub />,
      },
      {
        path: '/leetcode',
        element: <LeetCode />,
      },
    ],
  },
])

export default Router
