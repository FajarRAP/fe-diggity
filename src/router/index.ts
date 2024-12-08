import { createRouter, createWebHistory } from 'vue-router'
import RoutesName from './routes'
import ServiceView from '@/views/service/ServiceView.vue'
import ServiceDetailView from '@/views/service/ServiceDetailView.vue'
import ServiceTypeView from '@/views/service/ServiceTypeView.vue'
import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'
import DashboardAdminView from '@/views/admin/DashboardAdminView.vue'
import { useAuthStore } from '@/stores/auth_store'

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
    {
      path: RoutesName.signUpRoute,
      component: SignUpView,
    },
    {
      path: RoutesName.forgotPasswordRoute,
      component: ForgotPasswordView,
    },
    {
      path: `${RoutesName.resetPasswordRoute}`,
      component: ResetPasswordView,
      props: true,
    },
    {
      path: RoutesName.signOutRoute,
      redirect: (_) => RoutesName.serviceRoute,
    },
    {
      path: RoutesName.dashboardAdminRoute,
      component: DashboardAdminView,
    },
  ],
})

router.beforeEach((to, _) => {
  const authStore = useAuthStore()
  if (!authStore.isLoggedIn && to.path === RoutesName.dashboardAdminRoute) {
    return { path: RoutesName.signInRoute }
  }
})

export default router
