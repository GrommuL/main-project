import { ConfirmedIcon } from '@/components/ui/icons'
import { useAppSelector } from '@/utils/hooks/redux'

export const ProfileUserInformation = () => {
	const currentUser = useAppSelector((state) => state.auth?.user)
	return (
		<div className='flex flex-col gap-[10px]'>
			<h3 className='text-[32px] font-bold leading-[38px] text-textPrimary'>
				{currentUser && `${currentUser?.firstName} ${currentUser?.lastName}`}
			</h3>
			<div className='flex items-center gap-[8px]'>
				<div className='w-[20px] h-[20px] rounded-full bg-primary flex items-center justify-center'>
					<ConfirmedIcon />
				</div>
				<span>Почта подтверждена</span>
			</div>
		</div>
	)
}
