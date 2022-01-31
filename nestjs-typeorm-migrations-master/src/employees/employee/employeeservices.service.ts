import {
  HttpException,
  HttpStatus,
  Injectable,
  Param,
  Patch,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEmployeeDataDto } from './dto/CreateEmployeeData.dto'
import { employee } from './employee.entity'
import { UpdateEmployeeDto } from './dto/UpdateEmployeeData.dto'

@Injectable()
export class EmployeeservicesService {
  employeeservice: any
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
  findAll() {
    return this.EmployeeRepo.find()
    // return `This action returns all user`;
  }
  findOne(id: number) {
    return this.EmployeeRepo.findOne({ id })
  }
  async findbyusername(user_name: string) {
    return await this.EmployeeRepo.findOne({ where: { user_name: user_name } })
  }

  remove(id: number) {
    return this.findOne(id)
      .then((user) => {
        return this.EmployeeRepo.delete({
          id,
        })
          .then(() => {
            return {
              message: `User Deleted`,
              entity: user,
            }
          })
          .catch((err) => {
            throw err
          })
      })
      .catch((err) => {
        throw err
      })
  }
  update(id: number, updateEmpDto: UpdateEmployeeDto) {
    try {
      return this.findOne(id).then((res) => {
        return this.EmployeeRepo.save({
          ...res,
          ...updateEmpDto,
        }).catch((err) => {
          throw err
        })
      })
    } catch (err) {
      throw err
    }
  }

  clear() {
    this.EmployeeRepo.clear()
  }
}
