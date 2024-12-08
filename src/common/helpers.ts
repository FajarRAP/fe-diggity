import { toast } from 'vue3-toastify'

export const formInputborder = (error: string | undefined) => ({
  'border-gray-400 focus:ring-primary': !error,
  'border-red-600 focus:ring-red-600 focus:border-red-600 ': error,
})

export const successToast = (message: string) => toast.success(message)
export const errorToast = (message: string) => toast.error(message)
