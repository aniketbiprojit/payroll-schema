import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Employee } from './employee.entity'
import Template from './template.entity'

@Entity()
export class Category extends Template {
	@Column()
	job_type: string

	@OneToMany((type) => Employee, (employee) => employee.category)
	employees: Employee[]
}
