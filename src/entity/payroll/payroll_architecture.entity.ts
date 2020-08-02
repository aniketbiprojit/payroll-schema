import { Entity, TableInheritance, Column, Generated, ManyToOne } from 'typeorm'
import Template from '../template.entity'
import { PayRoll } from './payroll.entity'
import { PayRollComponent } from './payroll_component.entity'

/**
 * A tree like architecture to calculate the PayRoll.
 */
@Entity()
export class PayRollArchitecture extends Template {
	/**
     * 0 -> Operates on base salary
	 * 1 -> Operates on 0
	 * 1 -> Operates on 0
     * 2 -> Operates on 1
     * 
     *            0
     *        /       \
     *   1(fixed)     1(percent)
     *        \       /
     *         2(percent) -> Operates on sum of both
	 */
	@Column()
	order: number

	@ManyToOne((type) => PayRoll, (payroll) => payroll.architecture)
	payroll_id: PayRoll

	@ManyToOne((type) => PayRollComponent, (component) => component.payrollarcs)
	component: PayRollComponent
}
