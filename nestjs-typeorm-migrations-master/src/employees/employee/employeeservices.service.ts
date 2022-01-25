import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEmployeeDataDto } from './dto/CreateEmployeeData.dto'
import { employee } from './employee.entity'

@Injectable()
export class EmployeeservicesService {
  GetAllEmployee() {
    return 'sda'
  }
  constructor(
    @InjectRepository(employee) private EmployeeRepo: Repository<employee>,
  ) {}
  create(
    createEmployeeDto: CreateEmployeeDataDto,
  ): Promise<{ entity: employee; message: string }> {
    const emp = this.EmployeeRepo.create(createEmployeeDto)

    return this.EmployeeRepo.save(emp)
      .then((res) => {
        return {
          message: 'Employee Created',
          entity: res,
        }
      })
      .catch((err) => {
        throw err
      })
  }
}
