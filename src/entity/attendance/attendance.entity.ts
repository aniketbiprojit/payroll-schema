import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm'
import Template from '../template.entity'
import { User } from '../user.entity'
import { Calendar } from './calendar.entity'

@Entity()
export class Attendance extends Template {
	@Column({ type: 'timestamp' })
	checkIn: Date

	@Column({ type: 'timestamp' })
    checkOut: Date
    
    @Column({ type: 'timestamp' })
	defaultCheckIn: Date

	@Column({ type: 'timestamp' })
    defaultCheckOut: Date

    @ManyToOne(type=>User,user=>user.attendances)
    user:User

    @ManyToMany(type=>Calendar,calendar=>calendar.attendances)
    dates:Calendar[]
}
