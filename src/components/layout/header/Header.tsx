import { useAppSelector } from '@/utils/hooks/redux'
import { HeaderLinkButton, HeaderLogoLinkButton } from './ui'
import { LinkButton } from '@/components/ui/buttons'
import { HeaderUserInformation } from './ui/HeaderUserInformation'

export const Header = () => {
	const accountRole = useAppSelector((state) => state.auth.user?.accountRole)
	const user = useAppSelector((state) => state.auth.user)
	return (
		<header className='shadow-header'>
			<div className='container'>
				<div className='flex items-center justify-between h-[80px]'>
					<div className='flex items-center gap-[48px]'>
						<HeaderLogoLinkButton />
						{accountRole === 'freelancer' && (
							<HeaderLinkButton label='Найти задание' href='/' />
						)}
						{accountRole === 'customer' && (
							<HeaderLinkButton label='Создать задание' href='/' />
						)}
					</div>
					{user ? (
						<HeaderUserInformation />
					) : (
						<LinkButton label='Вход и регистрация' href='/login' />
					)}
				</div>
			</div>
		</header>
	)
}
