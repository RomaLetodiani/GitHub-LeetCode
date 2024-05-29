import axios from 'axios'

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === 'production'
      ? (import.meta.env.VITE_BACKEND_URL as string)
      : (import.meta.env.VITE_BACKEND_URL_LOCAL as string),
})
