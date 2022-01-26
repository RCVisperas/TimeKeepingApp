import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Param,
  Delete,
  Patch,
} from '@nestjs/common'
import { CreateEmployeeDataDto } from './dto/CreateEmployeeData.dto'
import { EmployeeservicesService } from './employeeservices.service'

import { UpdateEmployeeDto } from './dto/UpdateEmployeeData.dto'
@Controller('employee')
export class EmployeeController {
  constructor(private employeeservice: EmployeeservicesService) {}

  @Post('/create')
  create(@Body() createempDto: CreateEmployeeDataDto) {
    return this.employeeservice.create(createempDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }

  @Get('/')
  findAll() {
    return this.employeeservice.findAll().catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeservice.findOne(+id).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpDto: UpdateEmployeeDto) {
    try {
      this.employeeservice.update(+id, updateEmpDto)
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
    return this.employeeservice.update(+id, updateEmpDto)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeservice.remove(+id)
  }
  @Delete()
  removeAll() {
    return this.employeeservice.clear()
  }
}
