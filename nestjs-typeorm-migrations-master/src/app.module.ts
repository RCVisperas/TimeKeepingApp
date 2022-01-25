import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { BookModule } from './book/book.module'
import { EmployeeModule } from './employees/employee/employee.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config,
    }),
    UserModule,
    BookModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
