import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://leetcode.com/graphql',
  headers: {
    'Content-Type': 'application/json',
    referer: 'https://leetcode.com/',
  },
  cache: new InMemoryCache(),
})

const GET_LEETCODE_PROFILE = gql`
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        dccBadges {
          timestamp
          badge {
            name
            icon
          }
        }
        submissionCalendar
      }
    }
  }
`

const GET_LEETCODE_PUBLIC_PROFILE = gql`
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      githubUrl
      twitterUrl
      linkedinUrl
      profile {
        userAvatar
        realName
        aboutMe
        location
      }
    }
  }
`

export const fetchLeetCodeProfile = async (username: string, year: number) => {
  const { data } = await client.query({
    query: GET_LEETCODE_PROFILE,
    variables: { username, year },
  })
  return data.matchedUser
}

export const fetchLeetCodePublicProfile = async (username: string) => {
  const { data } = await client.query({
    query: GET_LEETCODE_PUBLIC_PROFILE,
    variables: { username },
  })
  return data.matchedUser
}
