import { Button, LinkButton } from '@/components/ui/buttons'
import { AuthInput } from '@/components/ui/inputs'
import { User } from '@/types/User'
import { useScrollToTop } from '@/utils/hooks/useScrollToTop'
import { useSignIn } from '@/utils/hooks/useSignIn'
import { loginSchema } from '@/utils/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const SignIn = () => {
	const { loginUser, message } = useSignIn()
	const { goToTop } = useScrollToTop()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<User>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<User> = async (userData) => {
		await loginUser(userData)
		goToTop('instant')
	}

	return (
		<section className='py-[50px] flex items-center justify-center'>
			<form
				className='flex flex-col items-center gap-[32px] py-[32px] px-[24px] rounded-[16px] shadow-dropdown w-[450px]'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex flex-col gap-[10px] text-center min-h-[65px]'>
					<div className='text-[25px] leading-[130%]'>Авторизация</div>
					{message && <p className='text-error max-w-[285px]'>{message}</p>}
				</div>
				<div className='w-full flex flex-col gap-[20px]'>
					<AuthInput
						label='Email'
						id='email'
						register={register}
						error={errors.email}
						type='email'
						required
					/>
					<div>
						<AuthInput
							label='Пароль'
							id='password'
							register={register}
							error={errors.password}
							type='password'
							required
						/>
						<Link
							className='text-[14px] leading-[20px] hover:text-primary transition'
							to='/'
						>
							Восстановить пароль
						</Link>
					</div>
				</div>
				<div className='flex flex-col gap-[8px] w-full'>
					<Button label='Войти' type='submit' />
					<LinkButton
						label='Зарегистрироваться'
						href='/register'
						variant='outline'
					/>
				</div>
			</form>
		</section>
	)
}
