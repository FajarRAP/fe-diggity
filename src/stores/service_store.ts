import axiosInstance from '@/common/axios'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'

export class Service {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }

  static fromJson(plainJson: any) {
    return new Service(plainJson.id, plainJson.name)
  }
}

export class Collaboration {
  id: string
  type: string

  constructor(id: string, type: string) {
    this.id = id
    this.type = type
  }

  static fromJson(plainJson: any) {
    return new Collaboration(plainJson.id, plainJson.type)
  }
}

export class Schedule {
  id: string
  schedule: string

  constructor(id: string, schedule: string) {
    this.id = id
    this.schedule = schedule
  }

  static fromJson(plainJson: any) {
    return new Schedule(plainJson.id, plainJson.schedule)
  }
}

export class Budget {
  id: string
  budget: string

  constructor(id: string, budget: string) {
    this.id = id
    this.budget = budget
  }

  static fromJson(plainJson: any) {
    return new Budget(plainJson.id, plainJson.amount)
  }
}

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

  return {
    fetchServices,
    fetchCollaborations,
    fetchSchedules,
    fetchBudgets,
  }
})
