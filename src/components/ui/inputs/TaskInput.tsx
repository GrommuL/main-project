import { Task } from '@/types/Task'
import { TaskIdType } from '@/types/TaskIdType'
import clsx from 'clsx'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface TaskInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	placeholder?: string
	id: TaskIdType
	register: UseFormRegister<Task>
	error: FieldError | undefined
	required: boolean
	className?: string
}

export const TaskInput: React.FC<TaskInputProps> = ({
	label,
	placeholder,
	error,
	id,
	register,
	required,
	className,
	type = 'text',
	disabled
}) => {
	return (
		<div className='flex flex-col gap-[8px] w-full'>
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
