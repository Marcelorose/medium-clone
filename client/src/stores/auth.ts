import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { login as loginAuth, signup as signupAuth } from '@/services/auth'

export const useAuthStore = defineStore('auth', () => {
  const data = reactive({
    user: {
      _id: '',
      name: '',
      role: '',
      email: '',
    }
  })
  const isLoggedIn = computed(() => {
    return !!data.user.email
  })
  async function login(email: string, password: string) {
    const { user } = await loginAuth(email, password)
    localStorage.setItem('user', JSON.stringify(user))
    data.user = user
  }

  async function signup(firstName: string, lastName: string, email: string, password: string, passwordConfirm: string) {
    const res = await signupAuth(firstName, lastName, email, password, passwordConfirm)
    data.user = res.user
  }

  return { data, isLoggedIn, login, signup }
})
