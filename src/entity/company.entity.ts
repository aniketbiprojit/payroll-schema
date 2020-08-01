import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Company {
	@PrimaryGeneratedColumn('uuid')
	id: number

	@Column()
	companyName: string

	@Column()
	isActive: boolean

	@ManyToOne(type=>User,user=>user.companies,)
	user:User
}
