import image from '/image.jpg'
import { BriefcaseIcon, CloseIcon } from '@/components/ui/icons'

export const ProfilePortfolioItem = () => {
	return (
		<div className='flex flex-col items-center max-w-[276px] w-full relative'>
			<button className='absolute top-[16px] left-[16px] w-[44px] h-[44px] rounded-full bg-primary flex items-center justify-center hover:bg-primaryHover'>
				<BriefcaseIcon />
			</button>
			<button className='absolute top-[16px] right-[16px] w-[44px] h-[44px] rounded-full bg-overlay flex items-center justify-center hover:bg-primaryHover'>
				<CloseIcon />
			</button>
			<img
				className='w-[276px] h-[180px] rounded-t-[16px]'
				src={image}
				alt='Portfolio'
			/>
			<span className='text-[20px] font-semibold leading-[26px] py-[24px] px-[16px]'>
				Дизайн сервиса туроператора I LIKE TRAVEL
			</span>
		</div>
	)
}
