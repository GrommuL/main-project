import { LinkButton } from '@/components/ui/buttons'
import { useState } from 'react'
import { Order, OrdersCategoriesTabs } from './components'

export type TaskInformationToggle = 'details' | 'responses'

export const Orders = () => {
	const [taskInformation, setTaskInformation] =
		useState<TaskInformationToggle>('details')

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
						<Order
							taskInformation={taskInformation}
							setTaskInformation={setTaskInformation}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
