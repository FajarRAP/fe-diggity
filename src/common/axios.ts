import axios, { AxiosError } from 'axios'
import { errorToast, successToast } from './helpers'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
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
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 200:
      case 201:
        if (response.config.url?.endsWith('login') || response.config.url?.endsWith('logout')) {
          successToast(response.data.message)
        }
        break
    }
    return response
  },
  (error) => {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 401:
          sessionStorage.clear()
          break
        default:
          errorToast(error.response?.data.error ?? error.response?.data.message)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
