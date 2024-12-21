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

export class ServiceOrder {
  id: string
  name: string
  phone_number: string
  email: string
  service_id: string
  collaboration_id: string
  project_detail: string
  schedule_id: string
  budget_id: string
  company_name: string
  position: string
  employee_id: string
  business_operated: string
  region_id: string
  duration_of_operation_id: string
  regency_id: string
  status_id: number
  created_at: string
  updated_at: string

  constructor(
    id: string,
    name: string,
    phone_number: string,
    email: string,
    service_id: string,
    collaboration_id: string,
    project_detail: string,
    schedule_id: string,
    budget_id: string,
    company_name: string,
    position: string,
    employee_id: string,
    business_operated: string,
    region_id: string,
    duration_of_operation_id: string,
    regency_id: string,
    status_id: number,
    created_at: string,
    updated_at: string,
  ) {
    this.id = id
    this.name = name
    this.phone_number = phone_number
    this.email = email
    this.service_id = service_id
    this.collaboration_id = collaboration_id
    this.project_detail = project_detail
    this.schedule_id = schedule_id
    this.budget_id = budget_id
    this.company_name = company_name
    this.position = position
    this.employee_id = employee_id
    this.business_operated = business_operated
    this.region_id = region_id
    this.duration_of_operation_id = duration_of_operation_id
    this.regency_id = regency_id
    this.status_id = status_id
    this.created_at = created_at
    this.updated_at = updated_at
  }

  static fromJson(plainJson: any) {
    return new ServiceOrder(
      plainJson.id,
      plainJson.name,
      plainJson.phone_number,
      plainJson.email,
      plainJson.service_id,
      plainJson.collaboration_id,
      plainJson.project_detail,
      plainJson.schedule_id,
      plainJson.budget_id,
      plainJson.company_name,
      plainJson.position,
      plainJson.employee_id,
      plainJson.business_operated,
      plainJson.region_id,
      plainJson.duration_of_operation_id,
      plainJson.regency_id,
      plainJson.status_id,
      plainJson.created_at,
      plainJson.updated_at,
    )
  }
}
