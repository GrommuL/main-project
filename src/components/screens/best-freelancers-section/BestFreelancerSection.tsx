import { PortfolioItem } from '@/components/PortfolioItem'

export const BestFreelancerSection = () => {
	return (
		<section className='mb-[100px] pb-[32px]'>
			<div className='container'>
				<div className='flex flex-col gap-[40px]'>
					<h2 className='font-bold text-[48px] leading-[120%]'>
						Наши лучшие исполнители
					</h2>
					<div className='flex items-center justify-center gap-[32px] flex-wrap'>
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
					</div>
				</div>
			</div>
		</section>
	)
}
