import { HeaderLinkButton, HeaderLogoLinkButton } from './ui'
import { LinkButton } from '@/components/ui/buttons'

export const Header = () => {
	return (
		<header className='shadow-header'>
			<div className='container'>
				<div className='flex items-center justify-between h-[80px]'>
					<div className='flex items-center gap-[48px]'>
						<HeaderLogoLinkButton />
						<div className='flex items-center'>
							<HeaderLinkButton label='Создать задание' href='/' />
							<HeaderLinkButton label='Найти задание' href='/' />
						</div>
					</div>
					<LinkButton label='Вход и регистрация' href='/login' />
				</div>
			</div>
		</header>
	)
}
