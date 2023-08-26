import { Button } from '@/components/ui/buttons'
import { FC } from 'react'

type TaskInformationBlockProps = {
	taskInformation: string
	orderId: string | number
	orderCategory: string
	orderPrice: string | number
	orderAbout: string
}

export const TaskInformationBlock: FC<TaskInformationBlockProps> = ({
	taskInformation,
	orderCategory,
	orderId,
	orderPrice,
	orderAbout
}) => {
	return (
		<div className='flex items-end justify-between'>
			{taskInformation === 'details' && (
				<div className='flex flex-col gap-[16px]'>
					<div>
						<h5 className='text-[20px] leading-[26px] font-semibold'>
							Номер задания
						</h5>
						<p>{orderId}</p>
					</div>
					<div>
						<h5 className='text-[20px] leading-[26px] font-semibold'>
							Категория и подкатегория
						</h5>
						<p>{orderCategory}</p>
					</div>
					<div>
						<h5 className='text-[20px] leading-[26px] font-semibold'>
							Описание услуги
						</h5>
						<p>{orderAbout}</p>
					</div>
					<div>
						<h5 className='text-[20px] leading-[26px] font-semibold'>
							Какой бюджет
						</h5>
						<p>до {orderPrice} руб.</p>
					</div>
				</div>
			)}
			{taskInformation === 'responses' && (
				<div className='flex flex-col gap-[16px]'>
					<h5 className='text-[20px] leading-[26px] font-semibold'>
						У задания пока нет откликов
					</h5>
					<p className='text-textSecondary max-w-[578px]'>
						Скоро здесь появятся отклики исполнителей, готовых выполнить ваше
						задание. Это может занять время. Дождитесь, пока исполнители увидят
						задание и откликнутся на него
					</p>
				</div>
			)}
			<Button label='Отменить заказ' variant='secondary' />
		</div>
	)
}
