import Avatar from '@/assets/images/default-avatar.jpg'
import { PencilIcon } from '@/components/ui/icons'
import { Modal } from '@/components/ui/modals'
import { useAppSelector } from '@/utils/hooks/redux'
import { useModal } from '@/utils/hooks/useModal'
import { ProfileUploadAvatar } from './ProfileUploadAvatar'

export const ProfileAvatar = () => {
	const userAvatar = useAppSelector((state) => state.auth.user?.avatar)
	const { isOpen, handleCloseModal, handleOpenModal } = useModal()
	return (
		<div className='relative w-[120px] h-[120px]'>
			<img
				className='rounded-full border-[2px] border-primary w-full h-full object-cover'
				src={userAvatar ? userAvatar : Avatar}
				alt='Avatar'
			/>
			<button
				className='p-[10px] w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center absolute bottom-0 right-0 hover:bg-primaryHover transition'
				onClick={handleOpenModal}
			>
				<PencilIcon stroke='#FFFFFF' />
			</button>
			<Modal
				isOpen={isOpen}
				onClick={handleCloseModal}
				body={<ProfileUploadAvatar />}
			/>
		</div>
	)
}
