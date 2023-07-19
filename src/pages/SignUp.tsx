import { Button, LinkButton } from '@/components/ui/buttons'
import { AuthInput } from '@/components/ui/inputs'
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
					<AuthInput
						label='Имя'
						id='firstName'
						register={register}
						error={errors.firstName}
						type='text'
						required
					/>
					<AuthInput
						label='Фамилия'
						id='lastName'
						register={register}
						error={errors.lastName}
						type='text'
						required
					/>
					<AuthInput
						label='Email'
						id='email'
						register={register}
						error={errors.email}
						type='email'
						required
					/>
					<div className='flex flex-col gap-[8px]'>
						<AuthInput
							label='Пароль'
							id='password'
							register={register}
							error={errors.password}
							type='password'
							required
						/>
						<span className='w-full h-[4px] bg-borderColor'></span>
						<div className='text-[14px] leading-[20px] text-textSecondary'>
							Пароль должен содержать не менее 8 символов, заглавную букву,
							цифры, один из символов (!$#%)
						</div>
					</div>
					<AuthInput
						label='Подтверждение пароля'
						id='confirmPassword'
						register={register}
						error={errors.confirmPassword}
						type='password'
						required
					/>
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
