import RoutesName from '@/router/routes'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.url?.endsWith('login')) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default axiosInstance
