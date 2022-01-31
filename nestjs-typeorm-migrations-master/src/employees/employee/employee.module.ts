import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeController } from './employee.controller'
import { employee } from './employee.entity'
import { EmployeeservicesService } from './employeeservices.service'
@Module({
  controllers: [EmployeeController],
  providers: [EmployeeservicesService],
  imports: [TypeOrmModule.forFeature([employee])],
  exports: [EmployeeservicesService],
})
export class EmployeeModule {}
