import { Button, LinkButton } from '@/components/ui/buttons'
import { ConfirmedIcon, PencilIcon } from '@/components/ui/icons'
import { useAppSelector } from '@/utils/hooks/redux'
import { useState } from 'react'
import Avatar from '@/assets/images/default-avatar.jpg'
import clsx from 'clsx'
import { ProfileInput } from '@/components/ui/inputs'

export const Profile = () => {
	const userAvatar = useAppSelector((state) => state.auth.user?.avatar)
	const currentUser = useAppSelector((state) => state.auth?.user)
	const [category, setCategory] = useState<'about' | 'settings'>('about')
	return (
		<main className='pt-[50px]'>
			<div className='container'>
				<div className='flex flex-col gap-[50px]'>
					<div className='p-[32px] shadow-dropdown rounded-[16px] bg-white w-full flex flex-col gap-[24px]'>
						<div className='max-w-[347px] flex items-center gap-[16px]'>
							<div className='relative w-[120px] h-[120px]'>
								<img
									className='rounded-full border-[2px] border-primary w-full h-full'
									src={userAvatar ? userAvatar : Avatar}
									alt='Avatar'
								/>
								<button className='p-[10px] w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center absolute bottom-0 right-0'>
									<PencilIcon />
								</button>
							</div>
							<div className='flex flex-col gap-[10px]'>
								<h3 className='text-[32px] font-bold leading-[38px] text-textPrimary'>
									{currentUser &&
										`${currentUser?.firstName} ${currentUser?.lastName}`}
								</h3>
								<div className='flex items-center gap-[8px]'>
									<div className='w-[20px] h-[20px] rounded-full bg-primary flex items-center justify-center'>
										<ConfirmedIcon />
									</div>
									<span>Почта подтверждена</span>
								</div>
							</div>
						</div>
						<span className='w-full h-[1px] bg-borderColor'></span>
						<div className='flex items-center justify-between'>
							{currentUser?.accountRole === 'customer' && (
								<>
									<span className='text-[18px]'>
										Создать задание для выполнения заказа
									</span>
									<LinkButton label='Создать задание' href='/' />
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
					</div>
					<div>
						<div className='flex items-center gap-[24px]'>
							<button
								className={clsx(
									'py-[10px] text-[18px] leading-[24px] border-b-[2px]',
									category === 'about'
										? 'border-b-primary'
										: 'border-b-transparent'
								)}
								onClick={() => setCategory('about')}
							>
								Обо мне
							</button>
							<button
								className={clsx(
									'py-[10px] text-[18px] leading-[24px] border-b-[2px]',
									category === 'settings'
										? 'border-b-primary'
										: 'border-b-transparent'
								)}
								onClick={() => setCategory('settings')}
							>
								Настройки
							</button>
						</div>
						{category === 'about' && (
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
									{currentUser?.about
										? currentUser?.about
										: 'Добавьте информацию о себе'}
								</div>
							</div>
						)}
						{category === 'settings' && (
							<div className='flex flex-col gap-[24px] p-[32px]'>
								<h4 className='text-[25px] font-semibold'>Личные данные</h4>
								<form className='flex flex-col gap-[32px]'>
									<div className='flex items-center gap-[32px] w-full'>
										<ProfileInput
											label='Имя'
											placeholder={currentUser?.firstName}
										/>
										<ProfileInput
											label='Фамилия'
											placeholder={currentUser?.lastName}
										/>
										<ProfileInput
											label='Email'
											placeholder={currentUser?.email}
										/>
									</div>
									<Button
										className='max-w-[128px]'
										label='Сохранить'
										type='submit'
									/>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
