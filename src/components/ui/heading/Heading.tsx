import { FC } from 'react'

type HeadingProps = {
	title: string
	description: string
}

export const Heading: FC<HeadingProps> = ({ title, description }) => {
	return (
		<div className='w-full flex flex-col gap-[32px] text-center'>
			<h2 className='text-[25px] leading-[32px] font-semibold'>{title}</h2>
			<p className='text-[18px] leading-[24px]'>{description}</p>
		</div>
	)
}
