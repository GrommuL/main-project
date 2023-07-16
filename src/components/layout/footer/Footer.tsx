import { footerInformationLinks, footerNavLinks } from '@/utils/constants'
import { NavLinksList } from './ui'
import { FooterLogoLink } from './ui/FooterLogoLink'

export const Footer = () => {
	return (
		<footer className='py-[80px] h-[284px] bg-white'>
			<div className='container'>
				<div className='flex justify-between'>
					<div className='flex items-center gap-[113px]'>
						<div className='flex flex-col gap-[62px]'>
							<FooterLogoLink />
							<span className='max-w-[195px] w-full'>
								© 2022 Netowork
								<br />
								Все права защищены
							</span>
						</div>
						<NavLinksList links={footerNavLinks} />
					</div>
					<NavLinksList links={footerInformationLinks} />
				</div>
			</div>
		</footer>
	)
}
