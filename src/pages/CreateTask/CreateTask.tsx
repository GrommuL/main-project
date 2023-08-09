import { Button } from '@/components/ui/buttons'
import { TaskInput } from '@/components/ui/inputs'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import clsx from 'clsx'
import { Task } from '@/types/Task'

enum TASK {
	TITLE = 0,
	DESCRIPTION = 1,
	PRICE = 2
}

export const CreateTask = () => {
	const [step, setStep] = useState(TASK.TITLE)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Task>({
		defaultValues: {
			taskName: ''
		}
	})

	const onNext = () => {
		setStep((value) => value + 1)
	}
	const onBack = () => {
		setStep((value) => value - 1)
	}

	const onSubmit: SubmitHandler<Task> = (data) => {
		if (step === TASK.PRICE) {
			console.log(data)
		}
	}

	return (
		<main className='py-[50px] flex flex-col gap-[40px] items-center justify-center'>
			<h2 className='text-[48px] leading-[57px] font-bold max-w-[721px] text-center'>
				Поможем найти исполнителя для вашего задания
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col items-center gap-[32px] py-[32px] px-[24px] rounded-[16px] shadow-dropdown w-[450px] relative'
			>
				<div className='flex items-center justify-center gap-[16px] absolute top-[-10px] left-0 right-0'>
					<span className='w-[134px] h-[8px] bg-primary rounded-[4px] block' />
					<span
						className={clsx(
							'w-[134px] h-[8px] bg-borderColor rounded-[4px] block',
							step === TASK.DESCRIPTION || step === TASK.PRICE
								? 'bg-primary'
								: ''
						)}
					/>
					<span
						className={clsx(
							'w-[134px] h-[8px] bg-borderColor rounded-[4px] block',
							step === TASK.PRICE && 'bg-primary'
						)}
					/>
				</div>
				<h3 className='text-[25px] leading-[32px] font-semibold'>
					Что нужно сделать?
				</h3>
				{step === TASK.TITLE && (
					<TaskInput
						id='taskName'
						register={register}
						error={errors?.taskName}
						required
						label='Название задания'
					/>
				)}
				{step === TASK.DESCRIPTION && (
					<textarea
						{...register('taskInformation')}
						className='border border-borderColor rounded-[16px] p-[12px] outline-none hover:border-primaryHover focus:border-primary'
						name='taskInformation'
						id='taskInformation'
						cols={46}
						rows={10}
						placeholder='Уточнить детали'
					/>
				)}
				{step === TASK.PRICE && (
					<TaskInput
						id='price'
						register={register}
						error={errors?.price}
						required
						label='На какой бюджет вы расчитываете'
						type='number'
					/>
				)}
				<div className='w-full flex items-center gap-[10px]'>
					{step > 0 && (
						<Button
							label='Назад'
							type='button'
							variant='outline'
							onClick={onBack}
						/>
					)}
					{step === TASK.PRICE ? (
						<Button label='Создать' type='submit' />
					) : (
						<Button label='Далее' type='button' onClick={onNext} />
					)}
				</div>
			</form>
		</main>
	)
}
