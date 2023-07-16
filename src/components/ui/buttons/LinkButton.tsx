import { FC } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
	label: string
	href: string
}

export const LinkButton: FC<LinkButtonProps> = ({ label, href }) => {
	return (
		<Link
			to={href}
			className='px-[20px] py-[12px] bg-primary rounded-[12px] text-[16px] leading-[24px] text-white hover:bg-primaryHover active:bg-primaryPressed transition'
		>
			{label}
		</Link>
	)
}
