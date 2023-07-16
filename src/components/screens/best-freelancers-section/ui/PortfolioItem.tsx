import { LinkButton } from '@/components/ui/buttons'
import image from '/image.jpg'
import avatar from '/avatar.jpg'

type PortfolioItemProps = {
	name: string
	id: string
	portfolio: string[]
	avatar: string
}

export const PortfolioItem = () => {
	return (
		<div className='flex flex-col items-center gap-[24px] cursor-pointer'>
			<div className='flex flex-col items-center gap-[24px] max-w-[276px] w-full'>
				<img
					className='w-[276px] h-[180px] rounded-t-[16px]'
					src={image}
					alt='Portfolio'
				/>
				<div className='flex items-center gap-[8px]'>
					<img
						className='w-[32px] h-[32px] border border-primary rounded-full'
						src={avatar}
						alt='Avatar'
					/>
					<div className='font-semibold text-[20px] leading-[130%]'>
						{'Никита Фролов'}
					</div>
				</div>
			</div>
			<LinkButton label='Перейти в портфолио' href={''} />
		</div>
	)
}
