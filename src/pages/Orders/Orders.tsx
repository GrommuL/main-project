import { LinkButton } from '@/components/ui/buttons'
import { OrderItem, OrdersCategoriesTabs } from './components'
import { useAppSelector } from '@/utils/hooks/redux'
import { useEffect } from 'react'
import { OrderService } from '@/services/OrderService'
import { Order } from '@/types/OrderType'

export const Orders = () => {
	const orderList: Order[] = useAppSelector((state) => state.orders.orders)
	const { getAllOrder } = OrderService()

	useEffect(() => {
		void getAllOrder()
	}, [])
	return (
		<main className='pt-[50px] pb-[100px]'>
			<div className='container'>
				<div className='flex flex-col gap-[50px]'>
					<div className='flex items-center justify-between px-[32px] py-[16px] bg-white rounded-[12px] shadow-dropdown'>
						<span>Создайте заказ и выберите исполнителя</span>
						<LinkButton href='/create-task' label='Создать' />
					</div>
					<div>
						<OrdersCategoriesTabs />
						{orderList.map((order) => (
							<OrderItem key={order.id} order={order} />
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
