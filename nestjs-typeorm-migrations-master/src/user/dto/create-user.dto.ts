import { Transform } from 'class-transformer'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { Bcrypt } from 'src/utils/Bcrypt'

export class CreateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(8, {
    message: `Password must be at least 8 characters long`,
  })
  @Transform(({ value }) => Bcrypt().generatePassword(value))
  password: string
}
