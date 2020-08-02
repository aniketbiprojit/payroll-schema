import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Designation } from './designation.entity'
import { Category } from './category.entity'
import Template from './template.entity'
import { Attendance } from './attendance.entity'
import { OverTime } from './overtime.entity'

/**
 * @decorator
 * @name Entity
 */
@Entity()
export class Employee extends Template {
	/**
	 * @decorator
	 * @name Column
	 * @type timestamp
	 * @default 'inherits'
	 * @description Changes if designation changes, or can be manually set up independent of designation.
	 * */
	@Column({ type: 'timestamp' })
	defaultCheckIn: Date

	/**
	 * @decorator
	 * @name Column
	 * @type timestamp
	 * @default inherits
	 * @description Changes if designation changes, or can be manually set up independent of designation.
	 * */
	@Column({ type: 'timestamp' })
	defaultCheckOut: Date

	/**
	 * @decorator
	 * @name Column
	 * @type simple-array
	 * @default 'inherits'
	 * @description This will be array of MON,TUE,WED,etc.
	 * Changes if designation changes, or can be manually set up independent of designation.
	 */
	@Column('simple-array')
	workingDays: string[]

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	email: string

	@Column()
	password: string

	/**
	 * @decorator
	 * @name ManyToOne
	 */
	@ManyToOne((type) => Designation, (designation) => designation.employees)
	designation: Designation

	/**
	 * @decorator
	 * @name ManyToOne
	 */
	@ManyToOne((type) => Category, (category) => category.employees)
	category: Category

	/**
	 * @decorator
	 * @name OneToMany
	 */
	@OneToMany((type) => OverTime, (overtime) => overtime.employee)
	overtimes: OverTime[]

    /**
	 * @decorator
	 * @name OneToMany
	 */
	@OneToMany((type) => OverTime, (overtime) => overtime.approver)
	approved_overtimes: OverTime[]

    /**
	 * @decorator
	 * @name OneToMany
	 */
	@OneToMany((type) => Attendance, (attendance) => attendance.employee)
	attendances: Attendance[]
}
