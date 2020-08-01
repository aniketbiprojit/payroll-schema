import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { User } from './user.entity'
import { Department } from './department.entity'

@Entity()
export class Company {
	@PrimaryGeneratedColumn('uuid')
	id: number

	@Column()
	companyName: string

	@Column()
	isActive: boolean

	@ManyToOne((type) => User, (user) => user.companies)
	user: User

	@OneToMany((type) => Department, (department) => department.company)
	departments: Department[]
}
