import { Dispatch, FC, SetStateAction } from 'react'
import {
	TaskInformation,
	TaskInformationBlock,
	TaskInformationSwitcher
} from '.'
import { TaskInformationToggle } from '../Orders'

type OrderProps = {
	taskInformation: string
	setTaskInformation: Dispatch<SetStateAction<TaskInformationToggle>>
}

export const Order: FC<OrderProps> = ({
	taskInformation,
	setTaskInformation
}) => {
	return (
		<div className='p-[32px]'>
			<div className='flex flex-col gap-[32px]'>
				<TaskInformation orderTitle='Лендинг на Тильде' orderPrice='30 000' />
				<TaskInformationSwitcher
					taskInformation={taskInformation}
					setTaskInformation={setTaskInformation}
				/>
				<TaskInformationBlock
					taskInformation={taskInformation}
					orderId={'12345678'}
					orderCategory='Дизайн - Веб дизайн'
					orderAbout='Сделать лендинг на Тильде для туроператора I LIKE TRAVEL'
					orderPrice={'30 000'}
				/>
			</div>
		</div>
	)
}
