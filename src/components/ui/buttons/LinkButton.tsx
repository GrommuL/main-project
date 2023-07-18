import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
	className?: string
	variant?: 'primary' | 'outline'
	label: string
	href: string
}

export const LinkButton: FC<LinkButtonProps> = ({
	label,
	href,
	className,
	variant = 'primary'
}) => {
	return (
		<Link
			to={href}
			className={clsx(
				'px-[20px] py-[12px] rounded-[12px] text-[16px] leading-[24px] flex items-center justify-center transition',
				{
					primary:
						'bg-primary text-white hover:bg-primaryHover active:bg-primaryPressed',
					outline:
						'bg-white border border-borderColor text-textPrimary hover:border-primary active:bg-primaryPressed active:text-white'
				}[variant],
				className
			)}
		>
			{label}
		</Link>
	)
}
