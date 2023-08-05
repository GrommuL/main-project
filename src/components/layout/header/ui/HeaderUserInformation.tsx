import { logoutUser } from '@/store/slices/authSlice'
import { HeaderLinkButton } from '.'
import { NotificationIcon, ConversationIcon } from '@/components/ui/icons'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@/assets/images/default-avatar.jpg'
import { AuthService } from '@/services/AuthService'

export const HeaderUserInformation = () => {
	const { removeTokenFromStorage } = AuthService()
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
	const contextMenu = useRef<HTMLDivElement>(null)
	const userAvatar = useAppSelector((state) => state.auth.user?.avatar)
	const dispatch = useAppDispatch()
	const logOut = () => {
		removeTokenFromStorage()
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
						className='w-[32px] h-[32px] rounded-full flex items-center justify-center overflow-hidden object-cover'
						onClick={() => setIsContextMenuOpen((prev) => !prev)}
					>
						<img
							className='w-full h-full'
							src={userAvatar ? userAvatar : Avatar}
							alt='avatar'
						/>
					</button>
					{isContextMenuOpen && (
						<div className='absolute top-[50px] right-[0px] flex flex-col items-start w-[240px] p-[6px] rounded-[8px] bg-white border border-borderColor shadow-header'>
							{/* <span className='absolute -top-[6px] right-[5px] bg-white w-[10px] h-[10px] border-b-[1px] border-b-borderColor border-r-[1px] border-r-transparent border-l-[1px] border-l-borderColor rotate-[135deg]'></span> */}
							<Link
								className='text-[14px] rounded-[8px] hover:bg-bgTertiary py-[9px] px-[12px] w-full text-left transition'
								to='/profile'
								onClick={() => setIsContextMenuOpen(false)}
							>
								Профиль
							</Link>
							<button
								className='text-[14px] rounded-[8px] hover:bg-bgTertiary py-[9px] px-[12px] w-full text-left transition'
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
