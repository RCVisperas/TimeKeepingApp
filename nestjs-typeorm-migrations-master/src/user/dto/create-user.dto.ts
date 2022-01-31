import { Exclude } from 'class-transformer'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { BeforeInsert, Column } from 'typeorm'

import * as bcrypt from 'bcrypt'
export class CreateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string
  @IsNotEmpty()
  @Exclude()
  @Column()
  password: string
}
