import { PlusIcon } from '@/components/ui/icons'
import { ProfilePortfolioItem } from './components/ProfilePortfolioItem'
import { useAppSelector } from '@/utils/hooks/redux'

export const ProfileFreelancerPortfolio = () => {
	const userPortfolio = useAppSelector((state) => state.auth.user?.portfolio)
	return (
		<div className='flex flex-col gap-[32px]'>
			<h2 className='text-[48px] font-bold leading-[57px]'>Портфолио</h2>
			<div className='flex items-center gap-[32px] flex-wrap'>
				{userPortfolio?.map((item) => (
					<ProfilePortfolioItem
						key={item.id}
						label={item.label}
						image={item.image}
					/>
				))}
				<button className='p-[32px] flex flex-col items-center justify-center gap-[16px] w-[276px] h-[332px] border-[2px] border-dashed border-borderColor rounded-[16px] shadow-shadowShape hover:border-primary transition'>
					<div className='w-[44px] h-[44px] rounded-full bg-bgSecondary flex items-center justify-center'>
						<PlusIcon />
					</div>
					<span className='text-[16px] font-semibold max-w-[142px]'>
						Добавить работу в портфолио
					</span>
				</button>
			</div>
		</div>
	)
}
