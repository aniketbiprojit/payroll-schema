import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import Template from './template.entity'
import { User } from './user.entity'
import { Calendar } from './calendar.entity'

export enum AtendanceStatus{
    LEAVE='on leave',
    ABSENT='absent',
    PRESENT='present'
}

@Entity()
export class Attendance extends Template {
	@Column({ type: 'timestamp' })
	checkIn: Date

	@Column({ type: 'timestamp' })
    checkOut: Date
    
    @Column({type:"enum",enum:AtendanceStatus})
    status:AtendanceStatus

    @ManyToOne(type=>User,user=>user.attendances)
    user:User

    @ManyToMany(type=>Calendar,calendar=>calendar.attendances)
    @JoinTable()
    dates:Calendar[]
}
