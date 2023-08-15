import { FC } from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	label: string
	onClick?: () => void
	variant?: 'primary' | 'outline'
}

export const Button: FC<ButtonProps> = ({
	label,
	onClick,
	className,
	variant = 'primary'
}) => {
	return (
		<button
			className={clsx(
				'px-[20px] py-[12px] border border-transparent rounded-[12px] text-[16px] leading-[24px] w-full ',
				{
					primary:
						'bg-primary text-white hover:bg-primaryHover active:bg-primaryPressed border border-primary transition',
					outline:
						'bg-white text-textPrimary hover:bg-primaryHover hover:text-white active:bg-primaryPressed active:text-white border border-borderColor transition'
				}[variant],
				className
			)}
			onClick={onClick}
		>
			{label}
		</button>
	)
}
