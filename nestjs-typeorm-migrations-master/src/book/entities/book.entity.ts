import { Expose } from 'class-transformer'
import { User } from 'src/user/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  name: string

  @Column({
    type: 'datetime',
    default: null,
  })
  date: Date

  @ManyToOne((type) => User, (user) => user.authored_books, {
    createForeignKeyConstraints: false,
    onDelete: 'SET NULL',
  })
  author: User
}
