import { Entity, TableInheritance, Column, Generated, ManyToOne, ChildEntity, OneToMany } from 'typeorm'
import Template from '../template.entity'
import { PayRollArchitecture } from './payroll_architecture.entity'
import { Department } from '../department.entity'
import { Designation } from '../designation.entity'
import { Employee } from '../employee.entity'
import { Releases } from './payroll_release.entity'

@Entity()
export class PayRoll extends Template {
	@Column('int')
	base_salary: number

	@ManyToOne((type) => PayRollArchitecture, (payrollarc) => payrollarc.payroll_id)
	architecture: PayRollArchitecture[]

	@ManyToOne((type) => Department, (dept) => dept.payroll)
	department: Department

	@ManyToOne((type) => Designation, (designation) => designation.payroll)
	designation: Designation

	@ManyToOne((type) => Employee, (emp) => emp.payroll)
	employee: Employee

	@OneToMany((type) => Releases, (releases) => releases.payroll)
	releases: Releases[]
}
