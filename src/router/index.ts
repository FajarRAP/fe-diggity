import { createRouter, createWebHistory } from 'vue-router'
import RoutesName from './routes'
import ServiceView from '@/views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutesName.serviceRoute,
      component: ServiceView,
    },
  ],
})

export default router
