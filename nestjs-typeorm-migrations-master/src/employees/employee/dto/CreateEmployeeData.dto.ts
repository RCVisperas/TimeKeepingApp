import { Transform } from 'class-transformer'
import { IsNotEmpty, IsEmail, MaxLength, MinLength } from 'class-validator'
import { Bcrypt } from 'src/utils/Bcrypt'

export class CreateEmployeeDataDto {
  @IsNotEmpty({ message: 'The first name should not be empty' })
  first_name: string

  @IsNotEmpty({ message: 'The last name should not be empty' })
  last_name: string

  @IsNotEmpty({ message: 'The number should not be empty' })
  @MaxLength(11, {
    message: `Phone number must be at least 11 characters long`,
  })
  @MinLength(11, {
    message: `Phone number must be at least 11 characters long`,
  })
  phone_number: string

  @IsNotEmpty({ message: 'The address should not be empty' })
  birthdate: string

  @IsEmail()
  email: string

  @IsNotEmpty({ message: 'The address should not be empty' })
  address: string

  @IsNotEmpty({ message: 'The contact person should not be empty' })
  contact_person: string

  @IsNotEmpty()
  @MinLength(8, {
    message: `Password must be at least 8 characters long`,
  })
  @Transform(({ value }) => Bcrypt().generatePassword(value))
  password: string
}
