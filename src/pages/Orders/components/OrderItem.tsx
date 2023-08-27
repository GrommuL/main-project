import { Order } from '@/types/OrderType'
import { TaskInformation, TaskInformationBlock } from '.'
import { FC } from 'react'

type OrderProps = {
	order: Order
}

export const OrderItem: FC<OrderProps> = ({ order }) => {
	return (
		<div className='p-[32px]'>
			<div className='flex flex-col gap-[32px]'>
				<TaskInformation
					orderTitle={order.orderTitle}
					orderPrice={order.orderPrice}
				/>
				<TaskInformationBlock
					orderId={order.id}
					orderCategory={order.orderCategory}
					orderAbout={order.orderAbout}
					orderPrice={order.orderPrice}
				/>
			</div>
		</div>
	)
}
