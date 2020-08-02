import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Employee } from './employee.entity'
import Template from './template.entity'

export enum JobType {
	FREELANCE = 'freelancer',
	PART_TIME = 'part-time',
	FULL_TIME = 'full-time',
	INTERN = 'intern',
}

@Entity()
export class Category extends Template {
	@Column({
		type: 'enum',
		enum: JobType,
	})
	job_type: JobType

	@OneToMany((type) => Employee, (employee) => employee.category)
	employees: Employee[]
}
