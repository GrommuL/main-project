import { LinkButton } from '@/components/ui/buttons'
import Avatar from '@/assets/images/default-avatar.jpg'
import { BriefcaseIcon } from '../../../ui/icons'
import { User } from '@/types/User'
import { FC } from 'react'

type PortfolioItemProps = {
	user: User
}

export const BestFreelancerPortfolioItem: FC<PortfolioItemProps> = ({
	user
}) => {
	return (
		<div className='flex flex-col items-center gap-[24px] cursor-pointer pb-[24px]'>
			<div className='flex flex-col items-center gap-[24px] max-w-[276px] w-full relative'>
				<button className='absolute top-[16px] left-[16px] w-[44px] h-[44px] rounded-full bg-primary flex items-center justify-center hover:bg-primaryHover'>
					<BriefcaseIcon />
				</button>
				<img
					className='w-[276px] h-[180px] rounded-t-[16px] object-cover'
					src={user.portfolio && user.portfolio[0].image}
					alt='Portfolio'
				/>
				<div className='flex items-center gap-[8px]'>
					<img
						className='w-[32px] h-[32px] border border-primary rounded-full object-cover'
						src={user.avatar?.length ? user.avatar : Avatar}
						alt='Avatar'
					/>
					<div className='font-semibold text-[20px] leading-[130%]'>
						{`${user.firstName} ${user.lastName}`}
					</div>
				</div>
			</div>
			<LinkButton label='Перейти в портфолио' href={''} />
		</div>
	)
}
