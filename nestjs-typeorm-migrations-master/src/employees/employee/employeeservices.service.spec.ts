import { Test, TestingModule } from '@nestjs/testing'
import { EmployeeservicesService } from './employeeservices.service'

describe('EmployeeservicesService', () => {
  let service: EmployeeservicesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeservicesService],
    }).compile()

    service = module.get<EmployeeservicesService>(EmployeeservicesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
