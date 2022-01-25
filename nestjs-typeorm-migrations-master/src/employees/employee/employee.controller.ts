import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common'
import { CreateEmployeeDataDto } from './dto/CreateEmployeeData.dto'
import { EmployeeservicesService } from './employeeservices.service'

@Controller('employee')
export class EmployeeController {
  constructor(private employeeservice: EmployeeservicesService) {}
  @Get('/')
  GetAllEmployee() {
    return this.employeeservice.GetAllEmployee()
  }
  @Post()
  create(@Body() createempDto: CreateEmployeeDataDto) {
    return this.employeeservice.create(createempDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }
}
