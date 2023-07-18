import { Button, LinkButton } from '@/components/ui/buttons'
import { RegisterFields } from '@/types/RegisterFields'
import { registerSchema } from '@/utils/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

export const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterFields>({
		resolver: zodResolver(registerSchema)
	})

	const onSubmit: SubmitHandler<RegisterFields> = (userData) => {
		console.log(userData)
	}
	return (
		<section className='py-[50px] flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col items-center gap-[32px] py-[32px] px-[24px] rounded-[16px] shadow-dropdown w-[450px]'
			>
				<div className='text-[25px] leading-[130%]'>Регистрация</div>
				<div className='flex items-center'>
					<div>
						<input
							{...register('accountRole', { required: true })}
							defaultChecked
							className='hidden peer'
							type='radio'
							name='accountRole'
							id='freelancer'
							value='freelancer'
						/>
						<label
							className='py-[11px] px-[16px] border border-borderColor w-[200px] flex items-center justify-center text-[18px] leading-[24px] cursor-pointer select-none rounded-s-[12px] peer-checked:border-primary'
							htmlFor='freelancer'
						>
							Я фрилансер
						</label>
					</div>
					<div>
						<input
							{...register('accountRole', { required: true })}
							className='hidden peer'
							type='radio'
							name='accountRole'
							id='customer'
							value='customer'
						/>
						<label
							className='py-[11px] px-[16px] border border-borderColor w-[200px] flex items-center justify-center text-[18px] leading-[24px] cursor-pointer select-none rounded-e-[12px] peer-checked:border-primary'
							htmlFor='customer'
						>
							Я заказчик
						</label>
					</div>
				</div>
				<div className='w-full flex flex-col gap-[10px]'>
					<div className='flex flex-col gap-[8px] min-h-[100px]'>
						<label className='text-[18px] leading-[24px] text-textSecondary'>
							Имя
						</label>
						<input
							{...register('firstName', { required: true })}
							id='firstName'
							className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
						/>
						<p className='text-error text-[12px] leading-none'>
							{errors.firstName?.message}
						</p>
					</div>
					<div className='flex flex-col gap-[8px] min-h-[100px]'>
						<label className='text-[18px] leading-[24px] text-textSecondary'>
							Фамилия
						</label>
						<input
							{...register('lastName')}
							id='lastName'
							className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
						/>
						<p className='text-error text-[12px] leading-none'>
							{errors.lastName?.message}
						</p>
					</div>
					<div className='flex flex-col gap-[8px]'>
						<label className='text-[18px] leading-[24px] text-textSecondary'>
							Email
						</label>
						<input
							{...register('email')}
							id='email'
							type='email'
							className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
						/>
						<p className='text-error text-[12px] leading-none'>
							{errors.email?.message}
						</p>
					</div>
					<div className='flex flex-col gap-[8px]'>
						<div className='flex flex-col gap-[8px]'>
							<label className='text-[18px] leading-[24px] text-textSecondary'>
								Пароль
							</label>
							<input
								{...register('password')}
								id='password'
								type='password'
								className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
							/>
							<p className='text-error text-[12px] leading-none'>
								{errors.password?.message}
							</p>
						</div>
						<span className='w-full h-[4px] bg-borderColor'></span>
						<div className='text-[14px] leading-[20px] text-textSecondary'>
							Пароль должен содержать не менее 8 символов, заглавную букву,
							цифры, один из символов (!$#%)
						</div>
					</div>
					<div className='flex flex-col gap-[8px]'>
						<label className='text-[18px] leading-[24px] text-textSecondary'>
							Подтверждение пароля
						</label>
						<input
							{...register('confirmPassword')}
							id='confirmPassword'
							type='password'
							className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
						/>
						<p className='text-error text-[12px] leading-none'>
							{errors.confirmPassword?.message}
						</p>
					</div>
					<div className='flex items-center gap-[8px]'>
						<input
							{...register('acceptTerms', { required: true })}
							className={clsx(
								'w-[20px] h-[20px] border border-borderColor rounded-[4px] appearance-none relative before:hidden before:content-check before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:checked:block checked:bg-primary cursor-pointer',
								errors.acceptTerms?.message && 'border-error'
							)}
							type='checkbox'
							name='acceptTerms'
							id='acceptTerms'
						/>
						<label
							className={clsx(
								'text-[16px] leading-[22px] select-none cursor-pointer',
								errors.acceptTerms?.message && 'text-error'
							)}
							htmlFor='acceptTerms'
						>
							Согласен с Privacy policy
						</label>
					</div>
				</div>
				<div className='flex flex-col gap-[8px] w-full'>
					<Button label='Зарегистрироваться' type='submit' />
					<LinkButton
						label='Уже есть аккаунт'
						href='/login'
						variant='outline'
					/>
				</div>
			</form>
		</section>
	)
}
