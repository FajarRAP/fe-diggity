import ContactUsService from '@/views/service/ContactUsServiceView.vue'
import DashboardAdminView from '@/views/admin/first-sidebar/FirstSidebarAdminDashboard.vue'
import DashboardContent from '@/views/admin/content/dashboard/DashboardContent.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import MessageContent from '@/views/admin/content/service/MessageContent.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'
import RoutesName from './routes'
import SecondSidebarDashboard from '@/views/admin/second-sidebar/DashboardSecondSidebar.vue'
import SecondSidebarService from '@/views/admin/second-sidebar/ServiceSecondSidebar.vue'
import ServiceDetailView from '@/views/service/ServiceDetailView.vue'
import ServiceTypeView from '@/views/service/ServiceTypeView.vue'
import ServiceView from '@/views/service/ServiceView.vue'
import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth_store'
import PortfolioContent from '@/views/admin/content/service/PortfolioContent.vue'
import AddPortfolioContent from '@/views/admin/content/service/AddPortfolioContent.vue'
import MessageDetailContent from '@/views/admin/content/service/MessageDetailContent.vue'
import PortfolioDetailContent from '@/views/admin/content/service/PortfolioDetailContent.vue'

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
          redirect: (_) => `${RoutesName.dashboardAdminRoute}/service/message`,
          children: [
            {
              path: 'message',
              component: MessageContent,
            },
            {
              path: 'message/:id(\\d+)',
              component: MessageDetailContent,
            },
            {
              path: 'portfolio',
              redirect: (_) => `${RoutesName.portfolioAdminRoute}`,
              children: [
                {
                  path: '',
                  component: PortfolioContent,
                },
                {
                  path: 'add',
                  component: AddPortfolioContent,
                },
                {
                  path: 'detail/:id(\\d+)',
                  component: PortfolioDetailContent,
                },
              ],
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
  authStore.checkIsLoggedIn()
  if (!authStore.isLoggedIn && to.path === RoutesName.dashboardAdminRoute) {
    return { path: RoutesName.signInRoute }
  }
})

export default router
