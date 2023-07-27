import { FC } from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	label: string
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
	return (
		<button
			className={clsx(
				'px-[20px] py-[12px] bg-primary rounded-[12px] text-[16px] leading-[24px] text-white hover:bg-primaryHover active:bg-primaryPressed transition',
				className
			)}
			onClick={onClick}
		>
			{label}
		</button>
	)
}
