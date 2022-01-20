import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from 'src/book/entities/book.entity'
import { Repository } from 'typeorm'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@Injectable()
export class BookService {
  // constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}

  async create(createBookDto: CreateBookDto) {
    console.log(createBookDto)
    const newBook = this.bookRepo.create({
      ...createBookDto,
    })

    const newlyCreatedBookFromDb = await this.bookRepo.save(newBook)
    return newlyCreatedBookFromDb
  }

  findAll() {
    return this.bookRepo.find({ relations: ['author'] })
  }

  findOne(id: number) {
    return this.bookRepo.findOneOrFail(id, {
      relations: ['author'],
    })
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepo.save({ ...updateBookDto })
  }

  remove(id: number) {
    return this.bookRepo.delete(id)
  }

  removeAll() {
    return this.bookRepo.clear()
  }
}
