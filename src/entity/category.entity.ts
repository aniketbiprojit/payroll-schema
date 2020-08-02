import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import { Employee } from './employee.entity'

@Entity()
export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: number
    
    @Column()
    job_type: string
    
    @OneToMany(type=>Employee,employee=>employee.category)
    employees:Employee[]

}