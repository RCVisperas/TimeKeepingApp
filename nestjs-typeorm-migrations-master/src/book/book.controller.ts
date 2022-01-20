import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common'
import { BookService } from './book.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

/**
 * ClassSerializerInterceptor makes sure our data is from object to class types
 */
@UseInterceptors(ClassSerializerInterceptor)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    console.log(createBookDto)
    return this.bookService.create(createBookDto)
  }

  @Get()
  findAll() {
    return this.bookService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.bookService.findOne(+id)
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const bookToBeUpdated = this.bookService.findOne(+id)
    return this.bookService.update(+id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id)
  }
  @Delete()
  removeAll() {
    return this.bookService.removeAll()
  }
}
