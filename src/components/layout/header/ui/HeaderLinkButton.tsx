import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeaderLinkButton {
	label: string
	href: string
}

export const HeaderLinkButton: FC<HeaderLinkButton> = ({ label, href }) => {
	return (
		<Link
			className='p-[16px] hover:text-primaryHover active:text-primaryPressed transition h-full'
			to={href}
		>
			{label}
		</Link>
	)
}
