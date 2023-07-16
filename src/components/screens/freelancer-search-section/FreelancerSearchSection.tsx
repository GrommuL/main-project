import { FreelancerSearch } from './ui/FreelancerSearch'
import MainImage from '@/assets/images/home/main-img.png'

export const FreelancerSearchSection = () => {
	return (
		<section className='mt-[50px] mb-[100px]'>
			<div className='container'>
				<div className='px-[60px] pb-[50px] rounded-[24px] shadow-shadowShape flex items-center gap-[54px]'>
					<div className='flex flex-col gap-[24px] max-w-[526px]'>
						<div className='flex flex-col gap-[24px]'>
							<h1 className='font-bold text-[64px] leading-[110%]'>
								Сервис подбора фрилансеров
							</h1>
							<p className='text-[18px] leading-[130%]'>
								Быстрый поиск исполнителей для ваших задач
							</p>
						</div>
						<FreelancerSearch />
					</div>
					<img src={MainImage} alt='MainImage' />
				</div>
			</div>
		</section>
	)
}
