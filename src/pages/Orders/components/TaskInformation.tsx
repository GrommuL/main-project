import { SharedIcon, ViewIcon } from '@/components/ui/icons'

export const TaskInformation = () => {
	return (
		<div className='flex flex-col gap-[12px]'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-[16px]'>
					<h3 className='text-[32px] font-bold leading-[38px]'>
						Лендинг на Тильде
					</h3>
					<button
						className='w-[44px] h-[44px] rounded-full bg-bgSecondary flex items-center justify-center border border-transparent hover:border-primaryHover transition'
						onClick={() => {
							console.log('click')
						}}
					>
						<SharedIcon />
					</button>
					<div className='flex items-center gap-[4px]'>
						<ViewIcon />
						<span>150</span>
					</div>
				</div>
				<span className='text-[32px] leading-[45px]'>до 30 000 руб.</span>
			</div>
			<div>Создано 03 октября 2022</div>
		</div>
	)
}
