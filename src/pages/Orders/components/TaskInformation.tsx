import { PencilIcon } from '@/components/ui/icons'
import { FC } from 'react'

type TaskInformationProps = {
	orderTitle: string
	orderPrice: string | number
}

export const TaskInformation: FC<TaskInformationProps> = ({
	orderTitle,
	orderPrice
}) => {
	return (
		<div className='flex flex-col gap-[12px]'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-[16px]'>
					<h3 className='text-[32px] font-bold leading-[38px]'>{orderTitle}</h3>
					<button
						className='w-[44px] h-[44px] rounded-full bg-bgSecondary flex items-center justify-center border border-transparent hover:border-primaryHover transition'
						onClick={() => {
							console.log('click')
						}}
					>
						<PencilIcon />
					</button>
				</div>
				<span className='text-[32px] leading-[45px]'>до {orderPrice} руб.</span>
			</div>
			<div>Создано 03 октября 2022</div>
		</div>
	)
}
