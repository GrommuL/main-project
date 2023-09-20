import { FreelancerSearch } from '@/components/screens/freelancer-search-section/ui/FreelancerSearch'
import { Button } from '@/components/ui/buttons'
import { categories } from '@/utils/constants'

export const TasksCatalog = () => {
	return (
		<main className='pt-[50px]'>
			<div className='container'>
				<div className='flex flex-col items-center gap-[26px]'>
					<div className='w-[100%] p-[32px] max-w-[900px]'>
						<FreelancerSearch />
					</div>
					<div className='flex gap-[75px] w-[100%]'>
						<aside className='flex flex-col items-start gap-[15px] max-w-[250px]'>
							{categories.map((category) => (
								<button key={category.value} className='text-left'>
									{category.label}
								</button>
							))}
						</aside>
						<div className=' w-[100%]'>
							<div className='flex items-center justify-end gap-[10px]'>
								<span>Сортировать по:</span>
								<div className='flex items-center gap-[10px]'>
									<Button
										className='whitespace-nowrap'
										label='Дате публикации'
									/>
									<Button label='Цене' />
								</div>
							</div>
							<div>asdasdsad</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
