import axios from 'axios'

async function login(email: string, password: string): Promise<{ user: any; token: string; }> {
  const data = await axios.post(
    'users/login',
    {
      email,
      password
    }
  )

  const user = data?.data?.data?.user || {}
  const token = data?.data?.token || ''

  return { user, token }
}

async function signup(firstName: string, lastName: string, email: string, password: string, passwordConfirm: string) {
  const data = await axios.post(
    'users/signup',
    {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm
    }
  )

  const user = data?.data?.data?.user || {}
  const token = data?.data?.token || ''

  return { user, token }
}

export { login, signup }
