import { PencilIcon } from '@/components/ui/icons'
import { Modal } from '@/components/ui/modals'
import { useAppSelector } from '@/utils/hooks/redux'
import { useModal } from '@/utils/hooks/useModal'

export const ProfileUserAbout = () => {
	const currentUser = useAppSelector((state) => state.auth?.user)
	const { isOpen, handleCloseModal, handleOpenModal } = useModal()
	return (
		<div className='p-[32px] shadow-dropdown rounded-b-[16px] bg-white flex flex-col gap-[16px] min-h-[300px]'>
			<div className='flex items-center justify-between'>
				<span className='font-semibold text-[25px] leading-[32px] text-textPrimary'>
					Обо мне
				</span>
				<button
					className='w-[44px] h-[44px] rounded-full bg-bgSecondary flex items-center justify-center'
					onClick={handleOpenModal}
				>
					<PencilIcon />
				</button>
			</div>
			<div className='pt-[24px] border-t border-t-borderColor'>
				{currentUser?.about ? currentUser?.about : 'Добавьте информацию о себе'}
			</div>
			<Modal isOpen={isOpen} onClick={handleCloseModal} />
		</div>
	)
}
