import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/user/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  create(
    createUserDto: CreateUserDto,
  ): Promise<{ entity: User; message: string }> {
    const user = this.userRepo.create(createUserDto)
    console.log(user)
    return this.userRepo
      .save(user)
      .then((res) => {
        return {
          message: 'User Created',
          entity: res,
        }
      })
      .catch((err) => {
        throw err
      })
  }

  findAll() {
    return this.userRepo.find()
    // return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userRepo.findOneOrFail({ id })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return this.findOne(id).then((res) => {
        return this.userRepo
          .save({
            ...res,
            ...updateUserDto,
          })
          .catch((err) => {
            throw err
          })
      })
    } catch (err) {
      throw err
    }
  }

  remove(id: number) {
    return this.findOne(id)
      .then((user) => {
        return this.userRepo
          .delete({
            id,
          })
          .then(() => {
            return {
              message: `User Deleted`,
              entity: user,
            }
          })
          .catch((err) => {
            throw err
          })
      })
      .catch((err) => {
        throw err
      })
  }
  clear() {
    this.userRepo.clear()
  }
}
