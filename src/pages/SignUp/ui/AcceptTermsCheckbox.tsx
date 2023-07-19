import { FC } from 'react'
import { clsx } from 'clsx'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterFields } from '@/types/RegisterFields'

type AcceptTermsCheckboxProps = {
	register: UseFormRegister<RegisterFields>
	errors: FieldErrors
}

export const AcceptTermsCheckbox: FC<AcceptTermsCheckboxProps> = ({
	register,
	errors
}) => {
	return (
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
	)
}
