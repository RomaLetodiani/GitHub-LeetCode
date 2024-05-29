import { api } from '../utils/Api'
export enum Route {
  GitHub = 'github',
  LeetCode = 'leetcode',
}

export const createApiService = (route: Route) => {
  return {
    getProfile: async (body: { userName: string }) => api.post(`${route}/profile`, body),
    getCalendar: async (body: { userName: string; year: number }) =>
      api.post(`${route}/calendar`, body),
  }
}

export const gitHubServices = createApiService(Route.GitHub)
export const leetCodeServices = createApiService(Route.LeetCode)
