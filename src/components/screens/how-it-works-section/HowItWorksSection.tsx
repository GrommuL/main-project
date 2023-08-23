import firstImg from '@/assets/images/home/how-it-works-1.png'
import secondImg from '@/assets/images/home/how-it-works-2.png'
import thirdImg from '@/assets/images/home/how-it-works-3.png'
import { HowItWorksItem } from './ui'

export const HowItWorksSection = () => {
	return (
		<section className='mb-[100px]'>
			<div className='container'>
				<div className='flex flex-col gap-[72px]'>
					<h2 className='font-bold text-[48px] leading-[120%]'>
						Как работает сервис?
					</h2>
					<div className='flex items-center justify-center gap-[20px]'>
						<HowItWorksItem
							title='Опишите услугу'
							description='Опишите свою задачу и условия. Это бесплатно и займёт 3‑4
									минуты'
							image={firstImg}
						/>
						<HowItWorksItem
							title='Получите отклики'
							description='Отклики с ценами от исполнителей. Обычно они приходят в
							течение 30 минут'
							image={secondImg}
						/>
						<HowItWorksItem
							title='Выберите исполнителя'
							description='Выберите подходящего исполнителя и обсудите сроки выполнения'
							image={thirdImg}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
