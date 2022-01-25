import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateEmployeeDataDto {
  @IsNotEmpty({ message: 'The first name should not be empty' })
  first_name: string

  @IsNotEmpty({ message: 'The last name should not be empty' })
  last_name: string

  @IsNotEmpty({ message: 'The last name should not be empty' })
  phone_number: string

  @IsNotEmpty({ message: 'The address should not be empty' })
  birthdate: string

  @IsEmail()
  email: string

  @IsNotEmpty({ message: 'The address should not be empty' })
  address: string

  @IsNotEmpty({ message: 'The contact person should not be empty' })
  contact_person: string
}
