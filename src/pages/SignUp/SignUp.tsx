import { Button, LinkButton } from '@/components/ui/buttons'
import { AuthInput } from '@/components/ui/inputs'
import { User } from '@/types/User'
import { registerSchema } from '@/utils/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	AcceptTermsCheckbox,
	AccountRoleCheckbox,
	PasswordRuleNotification
} from './ui'
import { useSignUp } from '@/utils/hooks/useSignUp'

export const SignUp = () => {
	const { createUser } = useSignUp()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<User>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<User> = async (userData) => {
		await createUser(userData)
	}
	return (
		<section className='py-[50px] flex items-center justify-center'>
			<form
				className='flex flex-col items-center gap-[32px] py-[32px] px-[24px] rounded-[16px] shadow-dropdown w-[450px]'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='text-[25px] leading-[130%]'>Регистрация</div>
				<AccountRoleCheckbox register={register} />
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
					<PasswordRuleNotification>
						<AuthInput
							label='Пароль'
							id='password'
							register={register}
							error={errors.password}
							type='password'
							required
						/>
					</PasswordRuleNotification>
					<AuthInput
						label='Подтверждение пароля'
						id='confirmPassword'
						register={register}
						error={errors.confirmPassword}
						type='password'
						required
					/>
					<AcceptTermsCheckbox register={register} errors={errors} />
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
