import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Company } from './company.entity'
import { Attendance } from './attendance.entity'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	/**
	 * @default 'inherits'
	 * Changes if designation changes, or can be manually set up independent of designation.
	 * */
	@Column({ type: 'timestamp' })
	defaultCheckIn: Date

	/**
	 * @default 'inherits'
	 * Changes if designation changes, or can be manually set up independent of designation.
	 * */
	@Column({ type: 'timestamp' })
	defaultCheckOut: Date

	/** 
	 * @default 'inherits'
	 * This will be array of MON,TUE,WED,etc.
	 * Changes if designation changes, or can be manually set up independent of designation.
	 */
	@Column('simple-array')
	workingDays: string[]

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	isActive: boolean

	@OneToMany((type) => Company, (company) => company.user, { eager: true })
	companies: Company[]

	@OneToMany((type) => Attendance, (attendance) => attendance.user)
	attendances: Attendance[]
}
