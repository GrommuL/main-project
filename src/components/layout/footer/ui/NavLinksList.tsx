import { FC } from 'react'
import { Link } from 'react-router-dom'
import { NavLinkItem } from '@/types/NavLinkItem'

type NavLinksListProps = {
	links: NavLinkItem[]
}

export const NavLinksList: FC<NavLinksListProps> = ({ links }) => {
	return (
		<nav>
			<ul className='flex flex-col gap-[16px]'>
				{links.map((link) => (
					<li className='hover:text-primaryHover transition' key={link.label}>
						<Link to={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
