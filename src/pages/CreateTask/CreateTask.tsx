import { Button } from '@/components/ui/buttons'
import { ProfileInput } from '@/components/ui/inputs'
import clsx from 'clsx'
import { useState } from 'react'

enum TASK {
	TITLE = 0,
	DESCRIPTION = 1,
	PRICE = 2
}

export const CreateTask = () => {
	const [step, setStep] = useState(TASK.TITLE)

	const onNext = () => {
		setStep((value) => value + 1)
	}
	const onBack = () => {
		setStep((value) => value - 1)
	}
	return (
		<main className='py-[50px] flex flex-col gap-[40px] items-center justify-center'>
			<h2 className='text-[48px] leading-[57px] font-bold max-w-[721px] text-center'>
				Поможем найти исполнителя для вашего задания
			</h2>
			<form className='flex flex-col items-center gap-[32px] py-[32px] px-[24px] rounded-[16px] shadow-dropdown w-[450px] relative'>
				<div className='flex items-center gap-[16px] absolute top-[-10px] left-0 right-0 mx-auto'>
					<span className='w-[138px] h-[8px] bg-primary rounded-[4px] block'></span>
					<span
						className={clsx(
							'w-[138px] h-[8px] bg-borderColor rounded-[4px] block',
							step === TASK.DESCRIPTION || step === TASK.PRICE
								? 'bg-primary'
								: ''
						)}
					></span>
					<span
						className={clsx(
							'w-[138px] h-[8px] bg-borderColor rounded-[4px] block',
							step === TASK.PRICE && 'bg-primary'
						)}
					></span>
				</div>
				<h3 className='text-[25px] leading-[32px] font-semibold'>
					Что нужно сделать?
				</h3>
				<ProfileInput label='Название задания' />
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
