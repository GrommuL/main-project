import { logoutUser } from '@/store/slices/authSlice'
import { HeaderLinkButton } from '.'
import { NotificationIcon, ConversationIcon } from '@/components/ui/icons'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@/assets/images/default-avatar.png'

export const HeaderUserInformation = () => {
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
	const contextMenu = useRef<HTMLDivElement>(null)
	// const userAvatar = useAppSelector((state) => state.auth.user)
	const dispatch = useAppDispatch()
	const logOut = () => {
		dispatch(logoutUser())
	}
	useEffect(() => {
		document.addEventListener('mousedown', (event: MouseEvent) => {
			if (!contextMenu.current?.contains(event.target as Node)) {
				setIsContextMenuOpen(false)
			}
		})
	})
	return (
		<div className='flex items-center gap-[24px]'>
			<HeaderLinkButton label='Мои заказы' href='/' />
			<div className='flex items-center gap-[32px]'>
				<div className='flex items-center gap-[16px]'>
					<Link to='/'>
						<NotificationIcon />
					</Link>
					<Link to='/'>
						<ConversationIcon />
					</Link>
				</div>
				<div ref={contextMenu} className='relative'>
					<button
						className='w-[32px] h-[32px] rounded-full flex items-center justify-center overflow-hidden'
						onClick={() => setIsContextMenuOpen((prev) => !prev)}
					>
						<img src={Avatar} alt='avatar' />
					</button>
					{isContextMenuOpen && (
						<div className='absolute top-[50px] -left-[30px] flex flex-col items-start p-[16px] rounded-[16px] bg-white border border-borderColor shadow-header'>
							<span className='absolute -top-[10px] left-[36px] bg-white w-5 h-5 border-b-[1px] border-b-borderColor border-r-[1px] border-r-transparent border-l-[1px] border-l-borderColor rotate-[135deg]'></span>
							<Link
								className='text-[14px] hover:text-primary'
								to='/profile'
								onClick={() => setIsContextMenuOpen(false)}
							>
								Профиль
							</Link>
							<button
								className='text-[14px] hover:text-primary'
								onClick={logOut}
							>
								Выйти
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
