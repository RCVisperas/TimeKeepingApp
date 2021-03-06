import { IsNotEmpty, IsEmail, MaxLength, MinLength } from 'class-validator'

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
  @IsNotEmpty({ message: 'The contact person should not be empty' })
  user_name: string
  @IsNotEmpty({ message: 'The password should not be empty' })
  password: string
}
