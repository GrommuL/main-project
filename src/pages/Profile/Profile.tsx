import { ProfileGeneralSettings, ProfileUserCard } from './ui'

export const Profile = () => {
	return (
		<main className='pt-[50px]'>
			<div className='container'>
				<div className='flex flex-col gap-[50px]'>
					<ProfileUserCard />
					<ProfileGeneralSettings />
				</div>
			</div>
		</main>
	)
}
