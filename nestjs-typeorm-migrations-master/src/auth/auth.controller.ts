import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { employee } from 'src/employees/employee/employee.entity'

import { AuthLoginDto } from './auth-login.dto'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() AuthLoginDto: AuthLoginDto) {
    return this.authService.login(AuthLoginDto)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return employee.find()
  }
}
