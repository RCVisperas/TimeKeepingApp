import { Exclude } from 'class-transformer'
import { Book } from 'src/book/entities/book.entity'

import * as bcrypt from 'bcrypt'
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column({
    unique: true,
  })
  email: string

  @Exclude()
  @Column()
  password: string

  @Column()
  updated_at: Date

  @BeforeInsert()
  updateUpdatedAt() {
    this.updated_at = new Date()
  }
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hashSync(this.password, 8)
  }

  @OneToMany((type) => Book, (book) => book.author, {
    eager: true,
    onDelete: 'SET NULL',
  })
  authored_books?: Book[]
}
