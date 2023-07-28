import { useState } from 'react'
import {
	ProfileEditUserInformation,
	ProfileGeneralSettingsTab,
	ProfileUserAbout
} from './components'

export const ProfileGeneralSettings = () => {
	const [category, setCategory] = useState<'about' | 'settings'>('about')
	return (
		<div>
			<div className='flex items-center gap-[24px]'>
				<ProfileGeneralSettingsTab
					id='about'
					category={category}
					label='Обо мне'
					onClick={() => setCategory('about')}
				/>
				<ProfileGeneralSettingsTab
					id='settings'
					category={category}
					label='Настройки'
					onClick={() => setCategory('settings')}
				/>
			</div>
			{category === 'about' && <ProfileUserAbout />}
			{category === 'settings' && <ProfileEditUserInformation />}
		</div>
	)
}
