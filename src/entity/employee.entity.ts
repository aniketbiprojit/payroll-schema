import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Designation } from './designation.entity'
import { Category } from './category.entity'
import Template from './template.entity'

@Entity()
export class Employee extends Template{
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
}
