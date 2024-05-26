import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <Link to={'leetcode'}>LeetCode</Link>
        <Link to={'github'}>GitHub</Link>
        <div className="bg-red-500">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
