import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'

import { Company } from './company.entity'

@Entity()
export class Department {
	@PrimaryGeneratedColumn('uuid')
	id: number

	@Column()
	departmentName: string

	@ManyToOne((type) => Company, (company) => company.departments, { eager: true })
	company: Company
}
