import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'

import { Department } from './department.entity'
import { Employee } from './employee.entity'
import Template from './template.entity'

@Entity()
export class Designation extends Template {
	@Column()
	designationName: string

	@ManyToOne((type) => Department, (department) => department.designations)
	department: Department

	@ManyToOne((type) => Designation, (designation) => designation.lower)
	upper: Designation

	@OneToMany((type) => Designation, (designation) => designation.upper)
	lower: Designation[]

	@OneToMany((type) => Employee, (employee) => employee.designation)
	employees: Employee[]
}
