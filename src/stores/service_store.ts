import axiosInstance from '@/common/axios'
import { errorToast, successToast } from '@/common/helpers'
import {
  Budget,
  BusinessDuration,
  Collaboration,
  Employee,
  Portfolio,
  PortfolioDetail,
  PortfolioParams,
  Regency,
  Region,
  Schedule,
  Service,
  ServiceOrder,
  ServiceOrderParams,
} from '@/common/models'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', () => {
  async function fetchServices(): Promise<Array<Service>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/services')
      const datas: Array<Service> = response.data.data.map((e: any) => Service.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchCollaborations(): Promise<Array<Collaboration>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/collaborations')
      const datas: Array<Collaboration> = response.data.data.map((e: any) =>
        Collaboration.fromJson(e),
      )
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchSchedules(): Promise<Array<Schedule>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/schedules')
      const datas: Array<Schedule> = response.data.data.map((e: any) => Schedule.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchBudgets(): Promise<Array<Budget>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/budgets')
      const datas: Array<Budget> = response.data.data.map((e: any) => Budget.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchEmployeesCount(): Promise<Array<Employee>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/employees')
      const datas: Array<Employee> = response.data.data.map((e: any) => Employee.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchBusinessOperatedDuration(): Promise<Array<BusinessDuration>> {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        'v1/data-service/duration-of-operations',
      )
      const datas: Array<BusinessDuration> = response.data.data.map((e: any) =>
        BusinessDuration.fromJson(e),
      )
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchRegions(): Promise<Array<Region>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/regions')
      const datas: Array<Region> = response.data.data.map((e: any) => Region.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function fetchRegencies(): Promise<Array<Regency>> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/data-service/regencies')
      const datas: Array<Region> = response.data.data.map((e: any) => Regency.fromJson(e))
      return datas
    } catch (error) {
      return []
    }
  }

  async function insertServiceOrder(params: ServiceOrderParams): Promise<void> {
    try {
      const response: AxiosResponse = await axiosInstance.post('v1/service-order/store', {
        name: params.name,
        phone_number: params.phoneNumber,
        email: params.email,
        service_id: params.service_id,
        collaboration_id: params.collaboration_id,
        project_detail: params.description,
        schedule: params.schedule_id,
        budget_id: params.budget_id,
        company_name: params.companyName,
        position: params.position,
        employee_id: params.employee_id,
        business_operated: params.business_operated,
        duration_of_operation_id: params.business_duration_id,
        region: params.region_id,
        regency: params.regency_id,
      })

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchServiceOrders({
    page = 1,
    name,
    status_id,
  }: {
    page: number
    name: string
    status_id: string
  }): Promise<{ service_orders: Array<ServiceOrder>; last_page: number }> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/service-order', {
        params: { page, name },
      })

      const service_orders = response.data.data.map(ServiceOrder.fromJson)
      const last_page = response.data.meta.total_pages

      return { service_orders, last_page }
    } catch (error) {
      errorToast('Failed to fetch service orders')
      return { service_orders: [], last_page: -1 }
    }
  }

  async function fetchServiceOrderCount(): Promise<number> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/service-order/sum')

      return response.data.data
    } catch (error) {
      return -1
    }
  }

  async function fetchVisitorCount(from: string, to: string): Promise<number> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/traffic', {
        params: {
          from,
          to,
        },
      })

      return response.data.totalVisitByDate[0].visit_count
    } catch (error) {
      return -1
    }
  }

  async function insertPortfolio(params: PortfolioParams): Promise<void> {
    try {
      const response: AxiosResponse = await axiosInstance.postForm('v1/portofolio', params.toJson())
      successToast(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchDashboardPortfolios({
    page = 1,
    keyword,
  }: {
    page: number
    keyword: string
  }): Promise<{ portfolios: Array<Portfolio>; last_page: number }> {
    try {
      const response: AxiosResponse = await axiosInstance.get('v1/portofolio/list', {
        params: {
          page,
          keyword,
        },
      })

      const portfolios = response.data.data.map((e: any) => Portfolio.fromJson(e))
      const last_page = response.data.meta.last_page

      return { portfolios, last_page }
    } catch (error) {
      return { portfolios: [], last_page: -1 }
    }
  }

  async function fetchServiceOrderById({ id }: { id: string }): Promise<ServiceOrder | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.get(`/v1/service-order/${id}`)
      const service_order = ServiceOrder.fromJson(response.data.data)

      return service_order
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchDashboardPortfolioById({
    id,
  }: {
    id: string
  }): Promise<PortfolioDetail | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.get(`/v1/portofolio/${id}`)
      const portfolio = PortfolioDetail.fromJson(response.data.data)

      return portfolio
    } catch (error) {
      console.log(error)
    }
  }

  async function deletePortfolio({ id }: { id: string }): Promise<boolean> {
    try {
      await axiosInstance.delete(`v1/portofolio/delete/${id}`)
      return true
    } catch (error) {
      return false
    }
  }

  async function updatePortfolio({ params }: { params: PortfolioDetail }): Promise<void> {
    try {
      await axiosInstance.post(`v1/portofolio/${params.id}`)
    } catch (error) {
      errorToast('Failed to update portfolio')
    }
  }

  return {
    fetchServices,
    fetchCollaborations,
    fetchSchedules,
    fetchBudgets,
    fetchEmployeesCount,
    fetchBusinessOperatedDuration,
    fetchRegions,
    fetchRegencies,
    insertServiceOrder,
    fetchServiceOrders,
    fetchServiceOrderCount,
    fetchVisitorCount,
    insertPortfolio,
    fetchDashboardPortfolios,
    fetchServiceOrderById,
    fetchDashboardPortfolioById,
    deletePortfolio,
    updatePortfolio,
  }
})
