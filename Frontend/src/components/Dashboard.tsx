import { useState } from 'react'
import { fetchLeetCodeProfile, fetchLeetCodePublicProfile } from '../Queries'

const Dashboard = () => {
  const [githubData, setGithubData] = useState(null)
  const [leetcodeData, setLeetcodeData] = useState(null)
  const [leetcodePublicData, setLeetcodePublicData] = useState(null)
  const [username, setUsername] = useState('')

  const handleSearch = async () => {
    // const githubProfile = await fetchGitHubProfile(username)
    const leetcodeProfile = await fetchLeetCodeProfile(username, new Date().getFullYear())
    console.log('🚀 ~ handleSearch ~ leetcodeProfile:', leetcodeProfile)
    const leetcodePublicProfile = await fetchLeetCodePublicProfile(username)
    console.log('🚀 ~ handleSearch ~ leetcodePublicProfile:', leetcodePublicProfile)

    // setGithubData(githubProfile)
    setLeetcodeData(leetcodeProfile)
    setLeetcodePublicData(leetcodePublicProfile)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* {githubData && (
        <div>
          <h2>GitHub Profile</h2>
          <p>Username: {githubData.login}</p>
          <p>Bio: {githubData.bio}</p>
          <p>Location: {githubData.location}</p>
          <p>Twitter: {githubData.twitterUsername}</p>
          <p>Company: {githubData.company}</p>
          <p>Email: {githubData.email}</p>
          <p>Total Repositories: {githubData.repositories.totalCount}</p>
          <p>
            Total Contributions:{' '}
            {githubData.contributionsCollection.contributionCalendar.totalContributions}
          </p>
          <img src={githubData.avatarUrl} alt="avatar" />
        </div>
      )} */}

      {leetcodeData && (
        <div>
          <h2>LeetCode Profile</h2>
          <p>Active Years: {leetcodeData.userCalendar.activeYears.join(', ')}</p>
          <p>Streak: {leetcodeData.userCalendar.streak}</p>
          <p>Total Active Days: {leetcodeData.userCalendar.totalActiveDays}</p>
        </div>
      )}

      {leetcodePublicData && (
        <div>
          <h2>LeetCode Public Profile</h2>
          <p>Username: {leetcodePublicData.username}</p>
          <p>Real Name: {leetcodePublicData.profile.realName}</p>
          <p>Location: {leetcodePublicData.profile.location}</p>
          <p>About Me: {leetcodePublicData.profile.aboutMe}</p>
          <p>GitHub: {leetcodePublicData.githubUrl}</p>
          <p>Twitter: {leetcodePublicData.twitterUrl}</p>
          <p>LinkedIn: {leetcodePublicData.linkedinUrl}</p>
          <img src={leetcodePublicData.profile.userAvatar} alt="avatar" />
        </div>
      )}
    </div>
  )
}

export default Dashboard
