import { LinkButton } from '@/components/ui/buttons'
import { OrderItem, OrdersCategoriesTabs } from './components'
import { useAppSelector } from '@/utils/hooks/redux'
import { useEffect } from 'react'
import { OrderService } from '@/services/OrderService'

export const Orders = () => {
	const orderList = useAppSelector((state) => state.orders.orders)
	const user = useAppSelector((state) => state.auth.user)
	const { getAllOrder } = OrderService()
	const ownerOrderList = orderList.filter(
		(order) => order.orderOwner?.id === user?.id
	)

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
						{ownerOrderList.map((order) => (
							<OrderItem key={order.id} order={order} />
						))}
						{!ownerOrderList.length && (
							<div className='flex justify-center items-center flex-col gap-[16px] pt-[30px]'>
								<h5 className='text-[20px] leading-[26px] font-semibold'>
									У задания пока нет заданий
								</h5>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
