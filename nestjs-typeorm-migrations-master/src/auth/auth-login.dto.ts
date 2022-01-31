import { IsNotEmpty } from 'class-validator'

export class AuthLoginDto {
  @IsNotEmpty()
  user_name: string

  @IsNotEmpty()
  password: string
}
