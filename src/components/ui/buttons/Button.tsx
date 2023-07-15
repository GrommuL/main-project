import { FC } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
	return (
		<button
			className='px-[20px] py-[12px] bg-primary rounded-[12px] text-[16px] leading-[24px] text-white hover:bg-primaryHover active:bg-primaryPressed transition'
			onClick={onClick}
		>
			{label}
		</button>
	)
}
