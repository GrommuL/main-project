import firstImg from '@/assets/images/home/how-it-works-1.png'
import secondImg from '@/assets/images/home/how-it-works-2.png'
import thirdImg from '@/assets/images/home/how-it-works-3.png'

export const HowItWorksSection = () => {
	return (
		<section className='mb-[100px]'>
			<div className='container'>
				<div className='flex flex-col gap-[72px]'>
					<h2 className='font-bold text-[48px] leading-[120%]'>
						Как работает сервис?
					</h2>
					<div className='flex items-center justify-center gap-[20px]'>
						<div className='flex flex-col items-center w-[400px]'>
							<div className='flex flex-col gap-[16px]'>
								<div className='font-semibold text-[25px] leading-[100%] text-center'>
									Опишите услугу
								</div>
								<div className='text-center'>
									Опишите свою задачу и условия.
									<br />
									Это бесплатно и займёт 3‑4 минуты
								</div>
							</div>
							<img src={firstImg} alt='' />
						</div>
						<div className='flex flex-col items-center w-[400px]'>
							<div className='flex flex-col gap-[16px]'>
								<div className='font-semibold text-[25px] leading-[100%] text-center'>
									Получите отклики
								</div>
								<div className='text-center'>
									Отклики с ценами от исполнителей.
									<br />
									Обычно они приходят в течение 30 минут
								</div>
							</div>
							<img src={secondImg} alt='' />
						</div>
						<div className='flex flex-col items-center w-[400px]'>
							<div className='flex flex-col gap-[16px]'>
								<div className='font-semibold text-[25px] leading-[100%] text-center'>
									Выберите исполнителя
								</div>
								<div className='text-center'>
									Выберите подходящего исполнителя
									<br />и обсудите сроки выполнения
								</div>
							</div>
							<img src={thirdImg} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
