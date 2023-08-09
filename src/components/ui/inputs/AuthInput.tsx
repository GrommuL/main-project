import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { AuthIdType } from '@/types/AuthIdType'
import { User } from '@/types/User'
import clsx from 'clsx'

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: AuthIdType
	register: UseFormRegister<User>
	error: FieldError | undefined
	required: boolean
	placeholder?: string
	className?: string
}

export const AuthInput: FC<AuthInputProps> = ({
	label,
	id,
	required = false,
	register,
	error,
	type = 'text',
	disabled,
	placeholder,
	className
}) => {
	return (
		<div className='flex flex-col gap-[8px] min-h-[100px] w-full'>
			<label className='text-[18px] leading-[24px] text-textSecondary'>
				{label}
			</label>
			<input
				id={id}
				type={type}
				disabled={disabled}
				{...register(id, { required: required })}
				className={clsx(
					'w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]',
					className
				)}
				placeholder={placeholder}
			/>
			<p className='text-error text-[12px] leading-none'>
				{error && error?.message}
			</p>
		</div>
	)
}
