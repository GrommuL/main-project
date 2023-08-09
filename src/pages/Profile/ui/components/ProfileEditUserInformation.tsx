import { Button } from '@/components/ui/buttons'
import { AuthInput } from '@/components/ui/inputs'
import { setUser } from '@/store/slices/authSlice'
import { User } from '@/types/User'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { editProfileSchema } from '@/utils/schemas/editProfileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosResponse } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'

export const ProfileEditUserInformation = () => {
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<User>({ resolver: zodResolver(editProfileSchema) })
	const currentUser = useAppSelector((state) => state.auth?.user)

	const onSubmit: SubmitHandler<User> = async (data) => {
		try {
			const response: AxiosResponse<User> = await axios.patch(
				`http://localhost:8080/users/${String(currentUser?.id)}`,
				data
			)
			dispatch(setUser(response.data))
			reset()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='flex flex-col gap-[24px] p-[32px]'>
			<h4 className='text-[25px] font-semibold'>Личные данные</h4>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-[32px]'
			>
				<div className='flex items-center gap-[32px] w-full'>
					<AuthInput
						id='firstName'
						register={register}
						error={errors.firstName}
						label='Имя'
						placeholder={currentUser?.firstName}
						required
						className='w-full'
					/>
					<AuthInput
						id='lastName'
						register={register}
						error={errors.lastName}
						label='Фамилия'
						placeholder={currentUser?.lastName}
						required
						className='w-full'
					/>
					<AuthInput
						id='email'
						register={register}
						error={errors.email}
						label='Email'
						placeholder={currentUser?.email}
						required
						className='w-full'
					/>
				</div>
				<Button className='max-w-[128px]' label='Сохранить' type='submit' />
			</form>
		</div>
	)
}
