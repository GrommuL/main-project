import { LinkButton } from '@/components/ui/buttons'

export const Orders = () => {
	return (
		<main className='pt-[50px] pb-[100px]'>
			<div className='container'>
				<div>
					<div className='flex items-center justify-between px-[32px] py-[16px] bg-white rounded-[12px] shadow-dropdown'>
						<span>Создайте заказ и выберите исполнителя</span>
						<LinkButton href='/create-task' label='Создать' />
					</div>
					<div></div>
				</div>
			</div>
		</main>
	)
}
