import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const auth = useAuthStore()

let user = localStorage.getItem('user');

if (user) {
  user = JSON.parse(user);
  auth.data.user = user;
}

axios.interceptors.response.use(null, function (error) {
  if (error.response.status == 401) {
    localStorage.removeItem('user');
    router.replace({ name: 'auth.login', params: { redirectTo: router.currentRoute.value.name } })
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = 'http://localhost:3000/api/v1/';
axios.defaults.withCredentials = true;


app.mount('#app')
