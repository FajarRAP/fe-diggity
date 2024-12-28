export default class RoutesName {
  static serviceRoute: string = '/'
  static serviceTypeRoute: string = `${this.serviceRoute}service/type`
  static contactUsServiceRoute: string = `${this.serviceRoute}contact-us-service`
  static signInRoute: string = '/sign-in'
  static signUpRoute: string = '/sign-up'
  static signOutRoute: string = '/sign-out'
  static forgotPasswordRoute: string = '/forgot-password'
  static resetPasswordRoute: string = '/reset-password'
  static dashboardAdminRoute: string = '/dashboard/admin'
  static messageAdminRoute: string = `${this.dashboardAdminRoute}/service/message`
  static portfolioAdminRoute: string = `${this.dashboardAdminRoute}/service/portfolio`
  static addPortfolioAdminRoute: string = `${this.portfolioAdminRoute}/add`
  static detailPortfolioAdminRoute: string = `${this.portfolioAdminRoute}/detail`
}
