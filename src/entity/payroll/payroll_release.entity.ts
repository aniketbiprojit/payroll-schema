import { Entity, TableInheritance, Column, Generated, ManyToOne, ChildEntity } from 'typeorm'
import Template from '../template.entity'
import { PayRoll } from './payroll.entity'

@Entity()
export class Releases extends Template{
    @ManyToOne(type=>PayRoll,pr=>pr.releases)
    payroll:PayRoll
}