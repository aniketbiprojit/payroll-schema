import { Entity, TableInheritance, Column, Generated, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import Template from '../template.entity'
import { PayRollArchitecture } from './payroll_architecture.entity'

export enum Health {
	BONUS = 1,
	DEDUCTIOn = -1,
}

export enum PayType {
	FIXED = 'fixed',
	PERCENT = 'percent',
}

@Entity()
export class PayRollComponent extends Template {
	@Column()
	componentName: string

	@Column({ type: 'enum', enum: Health })
	health: Health

	@Column({ type: 'enum', enum: PayType })
	type_of_pay: PayType

	@Column('int')
	value: number

	@Column('int')
    maxLimit: number
    
    @ManyToMany(type=>PayRollComponent,prc=>prc.triggeredBy)
    @JoinTable()
    maxLimitTriggers: PayRollComponent[]

    @Column('int')
    minLimit: number
    
    @ManyToMany(type=>PayRollComponent,prc=>prc.triggeredBy)
    @JoinTable()
    minLimitTriggers: PayRollComponent[]


    @ManyToMany(type=>PayRollComponent,prc=>prc.maxLimitTriggers)
    triggeredBy: PayRollComponent[]

    

	@OneToMany((type) => PayRollArchitecture, (payrollarc) => payrollarc.component)
	payrollarcs: PayRollArchitecture[]
}
