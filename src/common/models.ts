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

export class Employee {
  id: string
  employeeCount: string

  constructor(id: string, employeeCount: string) {
    this.id = id
    this.employeeCount = employeeCount
  }

  static fromJson(plainJson: any) {
    return new Employee(plainJson.id, plainJson.count_of_employee)
  }
}

export class BusinessDuration {
  id: string
  duration: string

  constructor(id: string, duration: string) {
    this.id = id
    this.duration = duration
  }

  static fromJson(plainJson: any) {
    return new BusinessDuration(plainJson.id, plainJson.duration)
  }
}

export class Region {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }

  static fromJson(plainJson: any) {
    return new Region(plainJson.id, plainJson.name)
  }
}

export class Regency {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }

  static fromJson(plainJson: any) {
    return new Regency(plainJson.id, plainJson.name)
  }
}

export class ServiceOrderParams {
  name: string
  phoneNumber: string
  email: string
  service_id: string
  collaboration_id: string
  description: string
  schedule_id: string
  budget_id: string
  companyName: string
  position: string
  employee_id: string
  business_operated: string
  business_duration_id: string
  region_id: string
  regency_id: string

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    service_id: string,
    collaboration_id: string,
    description: string,
    schedule_id: string,
    budget_id: string,
    companyName: string,
    position: string,
    employee_id: string,
    business_operated: string,
    business_duration_id: string,
    region_id: string,
    regency_id: string,
  ) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.service_id = service_id
    this.collaboration_id = collaboration_id
    this.description = description
    this.schedule_id = schedule_id
    this.budget_id = budget_id
    this.companyName = companyName
    this.position = position
    this.employee_id = employee_id
    this.business_operated = business_operated
    this.business_duration_id = business_duration_id
    this.region_id = region_id
    this.regency_id = regency_id
  }
}

export class ServiceOrderWithLastPage {
  service_order: ServiceOrder
  last_page: number

  constructor(service_order: ServiceOrder, last_page: number) {
    this.service_order = service_order
    this.last_page = last_page
  }
}

export class Status {
  id: number
  status: string

  constructor({ id, status }: { id: number; status: string }) {
    this.id = id
    this.status = status
  }

  static fromJson(json: any): Status {
    return new Status({ id: json.id, status: json.status })
  }
}

export class ServiceOrder {
  id: string
  name: string
  phone_number: string
  email: string
  project_detail: string
  company_name: string
  position: string
  business_operated: string
  created_at: string
  updated_at: string
  region: Region
  regency: Regency
  service: Service
  collaboration: Collaboration
  schedule: Schedule
  budget: Budget
  employee: Employee
  duration: BusinessDuration
  status: Status

  constructor({
    id,
    name,
    phone_number,
    email,
    project_detail,
    company_name,
    position,
    business_operated,
    created_at,
    updated_at,
    region,
    regency,
    service,
    collaboration,
    schedule,
    budget,
    employee,
    duration,
    status,
  }: {
    id: string
    name: string
    phone_number: string
    email: string
    project_detail: string
    company_name: string
    position: string
    business_operated: string
    created_at: string
    updated_at: string
    region: Region
    regency: Regency
    service: Service
    collaboration: Collaboration
    schedule: Schedule
    budget: Budget
    employee: Employee
    duration: BusinessDuration
    status: Status
  }) {
    this.id = id
    this.name = name
    this.phone_number = phone_number
    this.email = email
    this.project_detail = project_detail
    this.company_name = company_name
    this.position = position
    this.business_operated = business_operated
    this.created_at = created_at
    this.updated_at = updated_at
    this.region = region
    this.regency = regency
    this.service = service
    this.collaboration = collaboration
    this.schedule = schedule
    this.budget = budget
    this.employee = employee
    this.duration = duration
    this.status = status
  }

  static fromJson(plainJson: any) {
    return new ServiceOrder({
      id: plainJson.id,
      name: plainJson.name,
      phone_number: plainJson.phone_number,
      email: plainJson.email,
      project_detail: plainJson.project_detail,
      company_name: plainJson.company_name,
      position: plainJson.position,
      created_at: plainJson.created_at,
      updated_at: plainJson.updated_at,
      business_operated: plainJson.business_operated,
      region: Region.fromJson(plainJson.region),
      regency: Regency.fromJson(plainJson.regency),
      service: Service.fromJson(plainJson.service),
      collaboration: Collaboration.fromJson(plainJson.collaboration),
      schedule: Schedule.fromJson(plainJson.schedule),
      budget: Budget.fromJson(plainJson.budget),
      employee: Employee.fromJson(plainJson.employee),
      duration: BusinessDuration.fromJson(plainJson.duration_of_operation),
      status: Status.fromJson(plainJson.status),
    })
  }
}

interface IPortfolio {
  name: string
  client_name: string
  year: string
  service_id: string
  regency_id: string
  link: string
  technology: Array<string>
  detail_project: string
  task: string
  hero_image: FileList | undefined | null
  galleries: FileList | undefined | null
}

export class Portfolio {
  id: string
  name: string
  client_name: string
  service: string

  constructor({
    id,
    name,
    client_name,
    service,
  }: {
    id: string
    name: string
    client_name: string
    service: string
  }) {
    this.id = id
    this.name = name
    this.client_name = client_name
    this.service = service
  }

  static fromJson(json: any) {
    return new Portfolio({
      id: json.id,
      name: json.name,
      client_name: json.client_name,
      service: json.service,
    })
  }
}

export class PortfolioDetail {
  name: string
  client_name: string
  year: string
  service: string
  regency: string
  link: string
  technology: string[]
  detail_project: string
  task: string
  hero_image: FileList
  galleries: FileList
  id?: number
  created_at?: Date
  updated_at?: Date

  constructor(
    name: string,
    client_name: string,
    year: string,
    service: string,
    regency: string,
    link: string,
    technology: Array<string>,
    detail_project: string,
    task: string,
    hero_image: FileList,
    galleries: FileList,
    id?: number,
    created_at?: Date,
    updated_at?: Date,
  ) {
    this.name = name
    this.client_name = client_name
    this.year = year
    this.service = service
    this.regency = regency
    this.link = link
    this.technology = technology
    this.detail_project = detail_project
    this.task = task
    this.hero_image = hero_image
    this.galleries = galleries
    this.id = id
    this.created_at = created_at
    this.updated_at = updated_at
  }

  static fromJson(json: any) {
    return new PortfolioDetail(
      json.name,
      json.client_name,
      json.year,
      json.service,
      json.regency,
      json.link,
      json.technology,
      json.detail_project,
      json.task,
      json.hero_image,
      json.galleries,
      json.id,
      json.created_at,
      json.updated_at,
    )
  }
}

export class PortfolioParams implements IPortfolio {
  name: string
  client_name: string
  year: string
  service_id: string
  regency_id: string
  link: string
  technology: string[]
  detail_project: string
  task: string
  hero_image: FileList | undefined | null
  galleries: FileList | undefined | null

  constructor({
    name,
    client_name,
    year,
    service_id,
    regency_id,
    link,
    technology,
    detail_project,
    task,
    hero_image,
    galleries,
  }: {
    name: string
    client_name: string
    year: string
    service_id: string
    regency_id: string
    link: string
    technology: Array<string>
    detail_project: string
    task: string
    hero_image: FileList | undefined | null
    galleries: FileList | undefined | null
  }) {
    this.name = name
    this.client_name = client_name
    this.year = year
    this.service_id = service_id
    this.regency_id = regency_id
    this.link = link
    this.technology = technology
    this.detail_project = detail_project
    this.task = task
    this.hero_image = hero_image
    this.galleries = galleries
  }

  toJson(): object {
    return {
      name: this.name,
      service_id: this.service_id,
      client_name: this.client_name,
      regency_id: this.regency_id,
      link: this.link,
      year: this.year,
      technology: this.technology,
      detail_project: this.detail_project,
      task: this.task,
      hero_image: this.hero_image![0],
      image: this.galleries,
    }
  }
}
