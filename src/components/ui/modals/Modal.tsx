import { FC, ReactNode } from 'react'
import { CloseIcon } from '../icons'
import clsx from 'clsx'

type ModalProps = {
	children?: ReactNode
	body?: ReactNode
	isOpen: boolean
	onClick?: () => void
}

export const Modal: FC<ModalProps> = ({ children, body, isOpen, onClick }) => {
	return (
		<div
			className={clsx(
				'fixed overflow-hidden w-full h-full bg-overlay top-0 left-0 flex items-center justify-center z-[999]',
				!isOpen && 'hidden'
			)}
		>
			<div className='relative p-[32px] bg-white rounded-[16px] max-w-[600px] w-full'>
				{children}
				{body}
				<button
					className='flex items-center justify-center p-[12px] rounded-[16px] bg-white absolute top-[-50px] right-[-40px] hover:bg-borderColor transition'
					onClick={onClick}
				>
					<CloseIcon />
				</button>
			</div>
		</div>
	)
}
