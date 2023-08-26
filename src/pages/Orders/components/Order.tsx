import { TaskInformation, TaskInformationBlock } from '.'

export const Order = () => {
	return (
		<div className='p-[32px]'>
			<div className='flex flex-col gap-[32px]'>
				<TaskInformation orderTitle='Лендинг на Тильде' orderPrice='30 000' />
				<TaskInformationBlock
					orderId={'12345678'}
					orderCategory='Дизайн - Веб дизайн'
					orderAbout='Сделать лендинг на Тильде для туроператора I LIKE TRAVEL'
					orderPrice={'30 000'}
				/>
			</div>
		</div>
	)
}
