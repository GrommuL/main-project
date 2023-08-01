import { Button } from '@/components/ui/buttons'
import { Heading } from '@/components/ui/heading'

export const ProfileAboutEdit = () => {
	return (
		<form className='flex flex-col gap-[24px] items-center justify-center'>
			<Heading
				title='О себе'
				description='Расскажите о себе. Какими навыками обладаете, чем любите заниматься?'
			/>
			<textarea
				className='border border-borderColor rounded-[16px] p-[12px] outline-none hover:border-primaryHover focus:border-primary'
				name='about'
				id='about'
				cols={60}
				rows={10}
				placeholder='Введите текст'
			/>
			<Button label='Сохранить' className='w-[200px]' />
		</form>
	)
}
