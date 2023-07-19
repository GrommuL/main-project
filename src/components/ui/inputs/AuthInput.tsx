import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { AuthIdType } from '@/types/AuthIdType'
import { RegisterFields } from '@/types/RegisterFields'

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: AuthIdType
	register: UseFormRegister<RegisterFields>
	error: FieldError | undefined
	required: boolean
}

export const AuthInput: FC<AuthInputProps> = ({
	label,
	id,
	required = false,
	register,
	error
}) => {
	return (
		<div className='flex flex-col gap-[8px] min-h-[100px]'>
			<label className='text-[18px] leading-[24px] text-textSecondary'>
				{label}
			</label>
			<input
				id={id}
				{...register(id, { required: required })}
				className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
			/>
			<p className='text-error text-[12px] leading-none'>
				{error && error?.message}
			</p>
		</div>
	)
}
