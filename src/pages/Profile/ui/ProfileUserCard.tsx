import { Line } from '@/components/ui/Line'
import {
	ProfileAvatar,
	ProfileTaskCreateInterface,
	ProfileUserInformation
} from './components'

export const ProfileUserCard = () => {
	return (
		<div className='p-[32px] shadow-dropdown rounded-[16px] bg-white w-full flex flex-col gap-[24px]'>
			<div className='max-w-[347px] flex items-center gap-[16px]'>
				<ProfileAvatar />
				<ProfileUserInformation />
			</div>
			<Line />
			<ProfileTaskCreateInterface />
		</div>
	)
}
