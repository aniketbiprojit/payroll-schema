import { Entity, TableInheritance, Column, Generated, ManyToOne } from 'typeorm'
import Template from '../template.entity'
import { PayRollArchitecture } from './payroll_architecture.entity'

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'release' } })
export class PayRoll extends Template {
	@Column('int')
    base_salary: number
    
    @ManyToOne(type=>PayRollArchitecture,payrollarc=>payrollarc.payroll_id)
    architecture:PayRollArchitecture[]
}
export class WeeklyPayRoll extends Template {}

export class MonthlyPayRoll extends Template {}
