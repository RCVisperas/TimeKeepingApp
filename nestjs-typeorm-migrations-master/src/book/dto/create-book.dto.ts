import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { User } from 'src/user/entities/user.entity'

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  date: Date

  @IsNotEmpty()
  author: User
}
