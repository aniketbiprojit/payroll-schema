import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Company } from './company.entity'
import { Attendance } from './attendance/attendance.entity'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	isActive: boolean

	@OneToMany((type) => Company, (company) => company.user, { eager: true })
	companies: Company[]

	@OneToMany(type=>Attendance,attendance=>attendance.user)
	attendances:Attendance[]
}
