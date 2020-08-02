import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Designation } from './designation.entity'
import { Category } from './category.entity'
import Template from './template.entity'
import { Attendance } from './attendance.entity'
import {  OverTime } from './overtime.entity'


@Entity()
export class Employee extends Template{


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
	email: string

    @Column()
	password: string


	@ManyToOne((type) => Designation, (designation) => designation.employees)
	designation: Designation

    @ManyToOne((type=>Category),(category)=>category.employees)
    category:Category
    
    @OneToMany(type=>OverTime,overtime=>overtime.employee)
    overtimes:OverTime[]


    @OneToMany((type) => Attendance, (attendance) => attendance.employee)
    attendances: Attendance[]
    
}
