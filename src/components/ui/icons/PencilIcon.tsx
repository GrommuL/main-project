import { FC } from 'react'

type PencilIconProps = {
	stroke?: string
	fill?: string
}

export const PencilIcon: FC<PencilIconProps> = ({
	stroke = '#465EFD',
	fill = 'none'
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={fill}
		>
			<path
				d='M13.02 5.828L15.85 3L20.799 7.95L17.97 10.778M13.02 5.828L3.414 15.435C3.22645 15.6225 3.12106 15.8768 3.121 16.142V20.678H7.657C7.9222 20.6779 8.17651 20.5725 8.364 20.385L17.97 10.778M13.02 5.828L17.97 10.778'
				stroke={stroke}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
