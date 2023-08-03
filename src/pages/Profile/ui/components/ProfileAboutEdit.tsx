import { Button } from '@/components/ui/buttons'
import { Heading } from '@/components/ui/heading'
import { setUser } from '@/store/slices/authSlice'
import { User } from '@/types/User'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import axios, { AxiosResponse } from 'axios'
import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type ProfileAboutEditProps = {
	onClick: () => void
}

export const ProfileAboutEdit: FC<ProfileAboutEditProps> = ({ onClick }) => {
	const user = useAppSelector((state) => state.auth.user)
	const dispatch = useAppDispatch()
	const { register, handleSubmit } = useForm<FieldValues>({
		defaultValues: { about: '' }
	})
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			const response: AxiosResponse<User> = await axios.patch(
				`http://localhost:8080/users/${String(user?.id)}`,
				data
			)
			dispatch(setUser(response.data))
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-[24px] items-center justify-center'
		>
			<Heading
				title='О себе'
				description='Расскажите о себе. Какими навыками обладаете, чем любите заниматься?'
			/>
			<textarea
				{...register('about')}
				className='border border-borderColor rounded-[16px] p-[12px] outline-none hover:border-primaryHover focus:border-primary'
				name='about'
				id='about'
				cols={60}
				rows={10}
				placeholder='Введите текст'
			/>
			<Button
				label='Сохранить'
				className='w-[200px]'
				type='submit'
				onClick={onClick}
			/>
		</form>
	)
}
