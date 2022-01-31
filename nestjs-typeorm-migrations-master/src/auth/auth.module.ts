import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { EmployeeModule } from 'src/employees/employee/employee.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { jwtStrategy } from './jwt.strategy'
import { EmployeeController } from 'src/employees/employee/employee.controller'
import { EmployeeservicesService } from 'src/employees/employee/employeeservices.service'

@Module({
  imports: [
    EmployeeModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({ secret: process.env.JWT_SECRET,
        signOptions: {
        expiresIn: '5m',
      },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy],
})
export class AuthModule {}
