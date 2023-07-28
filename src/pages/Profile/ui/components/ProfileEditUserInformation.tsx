import { Button } from '@/components/ui/buttons'
import { ProfileInput } from '@/components/ui/inputs'
import { useAppSelector } from '@/utils/hooks/redux'

export const ProfileEditUserInformation = () => {
	const currentUser = useAppSelector((state) => state.auth?.user)
	return (
		<div className='flex flex-col gap-[24px] p-[32px]'>
			<h4 className='text-[25px] font-semibold'>Личные данные</h4>
			<form className='flex flex-col gap-[32px]'>
				<div className='flex items-center gap-[32px] w-full'>
					<ProfileInput label='Имя' placeholder={currentUser?.firstName} />
					<ProfileInput label='Фамилия' placeholder={currentUser?.lastName} />
					<ProfileInput label='Email' placeholder={currentUser?.email} />
				</div>
				<Button className='max-w-[128px]' label='Сохранить' type='submit' />
			</form>
		</div>
	)
}
