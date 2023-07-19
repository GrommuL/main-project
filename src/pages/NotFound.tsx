import NotFoundImg from '@/assets/images/NotFound.png'
import { LinkButton } from '@/components/ui/buttons'

export const NotFound = () => {
	return (
		<main className='w-full h-full'>
			<div className='flex items-center justify-between container py-[18px]'>
				<div className='flex flex-col gap-[60px]'>
					<div className='flex flex-col gap-[18px]'>
						<h2 className='text-[40px] font-black'>Oops....</h2>
						<p className='text-[32px]'>Страница не найдена</p>
						<p className='text-[16px] text-textSecondary'>
							Эта страница не существует или была удалена.
							<br />
							Приносим свои извинения
						</p>
					</div>
					<LinkButton label='На главную' href='/' />
				</div>
				<img src={NotFoundImg} alt='' />
			</div>
		</main>
	)
}
