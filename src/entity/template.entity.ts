import { PrimaryGeneratedColumn, Column } from 'typeorm'

export default abstract class Template {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	createdAt: Date

	@Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
	updatedAt: Date
}
