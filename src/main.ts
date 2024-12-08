import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/style.css'

import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 1500,
  position: toast.POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
} as ToastContainerOptions)

app.mount('#app')
