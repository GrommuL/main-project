import { ReactNode, FC } from 'react'

type PasswordRuleNotificationProps = {
	children: ReactNode
}

export const PasswordRuleNotification: FC<PasswordRuleNotificationProps> = ({
	children
}) => {
	return (
		<div className='flex flex-col gap-[8px]'>
			{children}
			<span className='w-full h-[4px] bg-borderColor'></span>
			<div className='text-[14px] leading-[20px] text-textSecondary'>
				Пароль должен содержать не менее 8 символов, заглавную букву, цифры,
				один из символов (!$#%)
			</div>
		</div>
	)
}
