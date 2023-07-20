import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { User } from '@/types/User'

type AccountRoleCheckboxProps = {
	register: UseFormRegister<User>
}

export const AccountRoleCheckbox: FC<AccountRoleCheckboxProps> = ({
	register
}) => {
	return (
		<div className='flex items-center'>
			<div>
				<input
					{...register('accountRole', { required: true })}
					defaultChecked
					className='hidden peer'
					type='radio'
					name='accountRole'
					id='freelancer'
					value='freelancer'
				/>
				<label
					className='py-[11px] px-[16px] border border-borderColor w-[200px] flex items-center justify-center text-[18px] leading-[24px] cursor-pointer select-none rounded-s-[12px] peer-checked:border-primary'
					htmlFor='freelancer'
				>
					Я фрилансер
				</label>
			</div>
			<div>
				<input
					{...register('accountRole', { required: true })}
					className='hidden peer'
					type='radio'
					name='accountRole'
					id='customer'
					value='customer'
				/>
				<label
					className='py-[11px] px-[16px] border border-borderColor w-[200px] flex items-center justify-center text-[18px] leading-[24px] cursor-pointer select-none rounded-e-[12px] peer-checked:border-primary'
					htmlFor='customer'
				>
					Я заказчик
				</label>
			</div>
		</div>
	)
}
