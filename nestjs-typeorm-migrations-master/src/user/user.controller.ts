import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('user')
/**
 * enables validation to this controller only
 */
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
/**
 * serialize body, param or query parameters into classes * so transformation can take place based on DTO
 */
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }

  @Get()
  findAll() {
    return this.userService.findAll().catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      this.userService.update(+id, updateUserDto)
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
  @Delete()
  removeAll() {
    return this.userService.clear()
  }
}
