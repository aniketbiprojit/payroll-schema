import { Entity, ManyToOne, Column } from 'typeorm'
import Template from './template.entity'
import { Employee } from './employee.entity'

export enum ExpenseStatus {
	APPLIED = 'Applied for overtime',
	APPROVE = 'Approved for overtime',
}

@Entity()
export class Expense extends Template {
	@Column()
	heading: String

	@Column()
	detail: String

	@Column('int')
	value: number

	/**
	 * @decorator 
     * @name Column
     * @type {Array<String>} 
     * @description Path to uploaded files
	 */
	@Column('simple-array')
	bill: string[]

	@ManyToOne((type) => Employee, (employee) => employee.approved_expenses)
	approver: Employee

	@ManyToOne((type) => Employee, (employee) => employee.expenses)
	employee: Employee
}
