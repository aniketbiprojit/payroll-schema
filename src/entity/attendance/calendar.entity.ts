import Template from '../template.entity'
import { Column, Entity, ManyToMany } from 'typeorm'
import { Attendance } from './attendance.entity'

export enum days {
	MON = 'Monday',
	TUE = 'Tuesday',
	WED = 'Wednesday',
	THU = 'Thursday',
	FRI = 'Friday',
	SAT = 'Saturday',
	SUN = 'Sunday',
}

export enum month {
	JAN = 'January',
	FEB = 'February',
	MAR = 'March',
	APR = 'April',
	MAY = 'May',
	JUN = 'June',
	JUL = 'July',
	AUG = 'August',
	SEP = 'September',
	OCT = 'October',
	NOV = 'November',
	DEC = 'December',
}

export abstract class CalendarBaseClass extends Template {
	@Column({
		type: 'enum',
		enum: days,
	})
	DayOfWeek: days

	@Column({
		type: 'enum',
		enum: month,
	})
    Month: month
    
    @Column('int')
    Day:number

    @Column('year')
    Year:number
}

@Entity()
export class Calendar extends CalendarBaseClass{
	@ManyToMany(type=>Attendance,attendance=>attendance.dates)
	attendances:Attendance[]
}

@Entity()
export class PublicHolidays extends CalendarBaseClass{
    @Column()
    holidayName:string
}