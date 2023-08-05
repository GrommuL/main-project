import { LinkButton } from '@/components/ui/buttons'
import { useAppSelector } from '@/utils/hooks/redux'

export const ProfileTaskCreateInterface = () => {
	const currentUser = useAppSelector((state) => state.auth?.user)
	return (
		<div className='flex items-center justify-between'>
			{currentUser?.accountRole === 'customer' && (
				<>
					<span className='text-[18px]'>
						Создать задание для выполнения заказа
					</span>
					<LinkButton label='Создать задание' href='/create-task' />
				</>
			)}
			{currentUser?.accountRole === 'freelancer' && (
				<>
					<span className='text-[18px]'>
						Найти задание для выполнения заказа
					</span>
					<LinkButton label='Найти задание' href='/' />
				</>
			)}
		</div>
	)
}
