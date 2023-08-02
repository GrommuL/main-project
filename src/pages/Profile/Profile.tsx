import { useAppSelector } from '@/utils/hooks/redux'
import {
	ProfileFreelancerPortfolio,
	ProfileGeneralSettings,
	ProfileUserCard
} from './ui'

export const Profile = () => {
	const user = useAppSelector((state) => state.auth.user)
	return (
		<main className='pt-[50px]'>
			<div className='container'>
				<div className='flex flex-col gap-[50px]'>
					<ProfileUserCard />
					<ProfileGeneralSettings />
					{user?.accountRole === 'freelancer' && <ProfileFreelancerPortfolio />}
				</div>
			</div>
		</main>
	)
}
