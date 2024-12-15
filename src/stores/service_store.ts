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
  return {
    fetchServices,
    fetchCollaborations,
  }
})
