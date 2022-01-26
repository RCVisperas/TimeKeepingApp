import { PartialType } from '@nestjs/mapped-types'
import { CreateEmployeeDataDto } from './CreateEmployeeData.dto'

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDataDto) {}
