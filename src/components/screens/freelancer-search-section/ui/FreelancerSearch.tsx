import { SearchIcon } from '@/components/ui/icons/SearchIcon'

export const FreelancerSearch = () => {
	return (
		<div className='flex items-center w-full'>
			<div className='w-[75%] px-[28px] py-[16px]  border border-primary rounded-s-[12px] flex items-center gap-[4px]'>
				<SearchIcon />
				<input
					className='w-full text-[16px] leading-[130%] outline-none'
					type='text'
				/>
			</div>
			<button
				className='w-[25%] py-[17.3px] px-[24px] text-white rounded-e-[16px] bg-primary hover:bg-primaryHover border border-primary transition'
				type='submit'
			>
				Найти
			</button>
		</div>
	)
}
