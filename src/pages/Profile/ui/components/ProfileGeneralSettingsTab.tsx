import clsx from 'clsx'
import { FC } from 'react'

type ProfileGeneralSettingsTabProps = {
	id: string
	label: string
	category: string
	onClick: () => void
}

export const ProfileGeneralSettingsTab: FC<ProfileGeneralSettingsTabProps> = ({
	category,
	onClick,
	label,
	id
}) => {
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
