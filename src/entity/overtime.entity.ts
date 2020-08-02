import { Entity, ManyToOne } from "typeorm";
import Template from "./template.entity";
import { Employee } from "./employee.entity";

@Entity()
export class OverTime extends Template{
    @ManyToOne(type=>Employee,employee=>employee.overtimes)
    employee:Employee 
}