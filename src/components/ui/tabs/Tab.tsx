import clsx from 'clsx'
import { FC } from 'react'

type TabProps = {
	id: string
	label: string
	category: string
	onClick: () => void
}

export const Tab: FC<TabProps> = ({ category, onClick, label, id }) => {
	return (
		<button
			className={clsx(
				'py-[10px] text-[18px] leading-[24px] border-b-[2px]',
				category === id ? 'border-b-primary' : 'border-b-transparent'
			)}
			onClick={onClick}
		>
			{label}
		</button>
	)
}
