import axios from 'axios'
import qs from 'qs'
import useAuthStore from '../Stores/Auth.store'
import authServices from '../Service/Auth'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

api.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'repeat' })
  const accessToken = useAuthStore.getState().accessToken
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = useAuthStore.getState().refreshToken
        if (!refreshToken) {
          // Redirect to login page or show authentication error message
          // Example: history.push('/login');
          return Promise.reject(error)
        }
        // Call your token refresh API endpoint using the refresh token
        const { data } = await authServices.refreshTokens(refreshToken)
        // Update access token in store and retry original request
        useAuthStore.getState().setTokens(data)
        originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`
        return api(originalRequest)
      } catch (refreshError) {
        console.log('🚀 ~ error:', error)
        // Handle refresh token error (e.g., logout user)
        console.error('Error refreshing token:', refreshError)
        // Clear tokens and redirect to login page
        useAuthStore.getState().clearTokens()
        // Redirect to login page or show authentication error message
        // Example: history.push('/login');
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  },
)

export default api
