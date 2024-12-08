import axios, { AxiosError } from 'axios'
import { errorToast, successToast } from './helpers'

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
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 200:
      case 201:
        successToast(response.data.message)
        break
      case 401:
        sessionStorage.clear()
    }
    return response
  },
  (error) => {
    if (error instanceof AxiosError) {
      errorToast(error.response?.data.error)
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
