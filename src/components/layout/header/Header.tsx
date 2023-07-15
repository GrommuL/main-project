import clsx from 'clsx'
import { HeaderLinkButton, HeaderLogoLinkButton } from './ui'
import { Button } from '@/components/ui/buttons'

export const Header = () => {
	return (
		<header className='shadow-header'>
			<div
				className={clsx(
					'container',
					'flex items-center justify-between h-[80px]'
				)}
			>
				<div className='flex items-center gap-[48px]'>
					<HeaderLogoLinkButton />
					<div className='flex items-center'>
						<HeaderLinkButton label='Создать задание' href='/' />
						<HeaderLinkButton label='Найти задание' href='/' />
					</div>
				</div>
				<Button label='Вход и регистрация' />
			</div>
		</header>
	)
}
