import { LinkButton } from '@/components/ui/buttons'
import image from '/image.jpg'
import avatar from '/avatar.jpg'
import { BriefcaseIcon } from '../../../ui/icons'

type PortfolioItemProps = {
	name: string
	id: string
	portfolio: string[]
	avatar: string
}

export const BestFreelancerPortfolioItem = () => {
	return (
		<div className='flex flex-col items-center gap-[24px] cursor-pointer pb-[24px]'>
			<div className='flex flex-col items-center gap-[24px] max-w-[276px] w-full relative'>
				<button className='absolute top-[16px] left-[16px] w-[44px] h-[44px] rounded-full bg-primary flex items-center justify-center hover:bg-primaryHover'>
					<BriefcaseIcon />
				</button>
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
