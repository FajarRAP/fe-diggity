import { computed, reactive, ref, type Ref } from 'vue'
import { defineStore, type StoreDefinition } from 'pinia'
import { useRouter } from 'vue-router'
import { Axios, AxiosError } from 'axios'
import axiosInstance from '@/common/axios'
import RoutesName from '@/router/routes'
import { errorToast, successToast } from '@/common/helpers'

export class User {
  email: string
  name: string
  lastLoginAt: Date

  constructor(email: string, name: string, lastLoginAt: Date) {
    this.email = email
    this.name = name
    this.lastLoginAt = lastLoginAt
  }

  static fromJson(plainJson: string): User {
    const obj = JSON.parse(plainJson)
    return new User(obj.email, obj.name, obj.last_login_at)
  }
}

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const plainUser: string | null = sessionStorage.getItem('user')
  const isLoggedIn: Ref<boolean> = ref(sessionStorage.getItem('token') !== null)
  const user: Ref<User | null> = ref(plainUser ? User.fromJson(plainUser) : null)
  const checkIsLoggedIn = (): boolean =>
    (isLoggedIn.value = sessionStorage.getItem('token') !== null)

  const signIn = async (email: string, password: string, rememberMe: boolean): Promise<void> => {
    try {
      const response = await axiosInstance.post('v1/auth/login', {
        email: email,
        password: password,
        remember_me: rememberMe,
      })

      sessionStorage.setItem('token', response.data.access_token)
      sessionStorage.setItem('user', JSON.stringify(response.data.data))
      checkIsLoggedIn()

      router.push({ path: RoutesName.dashboardAdminRoute })
    } catch (error) {}
  }

  const signOut = async (): Promise<void> => {
    try {
      const response = await axiosInstance.post(`v1/auth/logout`)
      sessionStorage.clear()
      checkIsLoggedIn()
    } catch (error) {}
  }

  const forgotPassword = async (email: string): Promise<void> => {
    try {
      const response = await axiosInstance.post('v1/auth/forgot-password', {
        email: email,
      })
      console.log(response.data)
      console.log(response.status)
    } catch (error) {
      console.log(`forgot password : ${error}`)
    }
  }

  const resetPassword = async (
    email: string,
    password: string,
    confirmPassword: string,
    resetToken: string,
  ): Promise<void> => {
    try {
      const response = await axiosInstance.post(`v1/auth/reset-password/${resetToken}`, {
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        token: resetToken,
      })
      console.log(response.data)
      console.log(response.status)
    } catch (error) {
      console.log(`forgot password : ${error}`)
    }
  }

  return {
    isLoggedIn,
    user,
    checkIsLoggedIn,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
  }
})
