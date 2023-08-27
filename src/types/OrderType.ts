import { User } from './User'

export type Order = {
	id?: number
	orderTitle: string
	orderCategory: string
	orderPrice: string | number
	orderAbout: string
	createdAt: number
	orderStatus: OrderStatus
	responses: User[] | []
	orderExecutor?: User
	orderOwner: User | null
}

export type OrderStatus = 'active' | 'closed' | 'in-work'

export type Orders = {
	orders: Order[]
}
