import { EmployeeservicesService } from 'src/employees/employee/employeeservices.service'
import { JwtService } from '@nestjs/jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthLoginDto } from './auth-login.dto'
import { employee } from 'src/employees/employee/employee.entity'

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeeservicesService,
    private jwtService: JwtService,
  ) {}

  async login(authloginDto: AuthLoginDto) {
    const emp = await this.validateEmployee(authloginDto)
    const payload = {
      id: emp.id,
    }
    return { access_token: this.jwtService.sign(payload) }
  }
  async validateEmployee(authloginDto: AuthLoginDto): Promise<employee> {
    const { user_name, password } = authloginDto

    const emp = await this.employeeService.findbyusername(user_name)
    if (!emp) {
      throw new UnauthorizedException('Employee Not Exist')
    }
    if (!(await emp?.validatePassword(password))) {
      throw new UnauthorizedException('Incorrect Password')
    }
    return emp
  }
}
