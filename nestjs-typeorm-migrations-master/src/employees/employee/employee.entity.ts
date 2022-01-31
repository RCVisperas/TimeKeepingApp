import { Exclude } from 'class-transformer'
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity('employees')
export class employee extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  phone_number: string

  @Column({ unique: true })
  email: string

  @Column()
  birthdate: string

  @Column()
  address: string

  @Column()
  contact_person: string

  @Column()
  user_name: string

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
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compareSync(password, this.password)
  }
}
