import { create } from 'zustand'
import { UserI } from '../Types/User.interface'

interface useAuthStoreI {
  user: UserI | null
  setUser: (user: UserI) => void
  accessToken: string | null
  refreshToken: string | null
  setTokens: (tokens: { access_token?: string; refresh_token?: string }) => void
  clearTokens: () => void
}

const useAuthStore = create<useAuthStoreI>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  setTokens: (tokens) => {
    tokens.access_token && localStorage.setItem('accessToken', tokens.access_token)
    tokens.refresh_token && localStorage.setItem('refreshToken', tokens.refresh_token)

    set({ accessToken: tokens.access_token, refreshToken: tokens.refresh_token })
  },
  clearTokens: () => {
    localStorage.removeItem('accessToken')
    // localStorage.removeItem("refreshToken");
    set({ accessToken: null, refreshToken: null })
  },
}))

export default useAuthStore
