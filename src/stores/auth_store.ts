import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

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
  const plainUser: string | null = sessionStorage.getItem('user')
  const isLoggedIn: Ref<boolean> = ref(sessionStorage.getItem('token') !== null)
  const user: Ref<User | null> = ref(plainUser ? User.fromJson(plainUser) : null)
  const checkIsLoggedIn = () => (isLoggedIn.value = sessionStorage.getItem('token') !== null)

  return { isLoggedIn, user, checkIsLoggedIn }
})
