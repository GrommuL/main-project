import clsx from 'clsx'
import { FC } from 'react'

type ToggleProps = {
	id: string
	value: string
	onClick: () => void
	label: string
	defaultChecked?: boolean
	name?: string
	variant?: 'left' | 'right' | 'default'
	className?: string
}

export const Toggle: FC<ToggleProps> = ({
	id,
	value,
	onClick,
	label,
	defaultChecked,
	name,
	variant = 'default',
	className
}) => {
	return (
		<div>
			<input
				defaultChecked={defaultChecked}
				className='hidden peer'
				type='radio'
				name={name}
				id={id}
				value={value}
				onChange={onClick}
			/>
			<label
				className={clsx(
					'py-[11px] px-[16px] border border-borderColor w-[200px] flex items-center justify-center text-[18px] leading-[24px] cursor-pointer select-none peer-checked:border-primary',
					{
						left: 'rounded-s-[12px]',
						right: 'rounded-e-[12px]',
						default: ''
					}[variant],
					className
				)}
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	)
}
