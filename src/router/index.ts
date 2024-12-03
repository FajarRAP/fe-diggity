import { createRouter, createWebHistory } from 'vue-router'
import RoutesName from './routes'
import ServiceView from '@/views/service/ServiceView.vue'
import ServiceDetailView from '@/views/service/ServiceDetailView.vue'
import ServiceTypeView from '@/views/service/ServiceTypeView.vue'
import SignInView from '@/views/auth/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutesName.serviceRoute,
      component: ServiceView,
    },
    {
      path: `${RoutesName.serviceRoute}/service/:slug`,
      component: ServiceDetailView,
      props: true,
    },
    {
      path: `${RoutesName.serviceTypeRoute}/:slug`,
      component: ServiceTypeView,
      props: true,
    },
    {
      path: RoutesName.signInRoute,
      component: SignInView,
    },
  ],
})

export default router
