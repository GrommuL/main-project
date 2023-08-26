import { User } from './User'

export type Order = {
	orderId: string | number
	orderCategory: string
	orderPrice: string | number
	orderAbout: string
	createdAt: number
	orderStatus: OrderStatus
	responses: User[]
	orderExecutor: User
}

export type OrderStatus = 'active' | 'closed' | 'in-work'
