interface ProfileInputProps {
	label: string
	placeholder?: string
}

export const ProfileInput: React.FC<ProfileInputProps> = ({
	label,
	placeholder
}) => {
	return (
		<div className='flex flex-col gap-[8px] w-full'>
			<label className='text-[18px] leading-[24px] text-textSecondary'>
				{label}
			</label>
			<input
				className='w-full h-[48px] border border-borderColor rounded-[6px] focus:border-primary outline-none py-[11px] px-[15px] text-[18px] leading-[24px]'
				placeholder={placeholder}
			/>
		</div>
	)
}
