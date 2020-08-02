import { Entity, ManyToOne, Column } from "typeorm";
import Template from "./template.entity";
import { Employee } from "./employee.entity";

export enum OverTimeStatus{
    APPLIED='Applied for overtime',
    APPROVE='Approved for overtime'
}

@Entity()
export class OverTime extends Template{
    @Column({type:'timestamp'})
    overTimeIn:Date

    @Column({type:'timestamp'})
    overTimeOut:Date

    @Column({type:'timestamp'})
    status:string

    @ManyToOne(type=>Employee,employee=>employee.approved_overtimes)
    approver:Employee 

    @ManyToOne(type=>Employee,employee=>employee.overtimes)
    employee:Employee 
}