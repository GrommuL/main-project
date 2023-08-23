import { useEffect } from 'react'
import { BestFreelancerPortfolioItem } from './ui'
import { useAppSelector } from '@/utils/hooks/redux'
import { UserService } from '@/services/UserService'

export const BestFreelancerSection = () => {
	const { getAllUsers } = UserService()
	const users = useAppSelector((state) => state.users.users)

	useEffect(() => {
		void getAllUsers()
	}, [])
	return (
		<section className='mb-[100px] pb-[32px]'>
			<div className='container'>
				<div className='flex flex-col gap-[40px]'>
					<h2 className='font-bold text-[48px] leading-[120%]'>
						Наши лучшие исполнители
					</h2>
					<div className='flex items-center gap-[32px] flex-wrap'>
						{users.map((user) => {
							if (user.portfolio?.length) {
								return <BestFreelancerPortfolioItem user={user} key={user.id} />
							}
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
