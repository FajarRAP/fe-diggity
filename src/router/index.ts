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
import ContactUsService from '@/views/service/ContactUsServiceView.vue'
import FirstForm from '@/components/contact-us/service/FirstForm.vue'
import SecondForm from '@/components/contact-us/service/SecondForm.vue'
import ThirdForm from '@/components/contact-us/service/ThirdForm.vue'
import SecondSidebarDashboard from '@/views/admin/second-sidebar/DashboardSecondSidebar.vue'
import SecondSidebarService from '@/views/admin/second-sidebar/ServiceSecondSidebar.vue'
import MessageContent from '@/views/admin/content/service/MessageContent.vue'
import DashboardContent from '@/views/admin/content/dashboard/DashboardContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: ServiceView,
    },
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
      children: [
        {
          path: '',
          component: SecondSidebarDashboard,
          children: [
            {
              path: '',
              component: DashboardContent,
            },
          ],
        },
        {
          path: 'service',
          component: SecondSidebarService,
          children: [
            {
              path: 'message',
              component: MessageContent,
            },
          ],
        },
      ],
    },
    {
      path: RoutesName.contactUsServiceRoute,
      component: ContactUsService,
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
