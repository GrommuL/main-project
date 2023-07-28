import { PencilIcon } from '@/components/ui/icons'
import { useAppSelector } from '@/utils/hooks/redux'

export const ProfileUserAbout = () => {
	const currentUser = useAppSelector((state) => state.auth?.user)
	return (
		<div className='p-[32px] shadow-dropdown rounded-b-[16px] bg-white flex flex-col gap-[16px] min-h-[300px]'>
			<div className='flex items-center justify-between'>
				<span className='font-semibold text-[25px] leading-[32px] text-textPrimary'>
					Обо мне
				</span>
				<button className='w-[44px] h-[44px] rounded-full bg-primary flex items-center justify-center'>
					<PencilIcon />
				</button>
			</div>
			<div className='pt-[24px] border-t border-t-borderColor'>
				{currentUser?.about ? currentUser?.about : 'Добавьте информацию о себе'}
			</div>
		</div>
	)
}
