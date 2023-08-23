import { FC } from 'react'

type HowItWorksItemProps = {
	title: string
	description: string
	image: string
}

export const HowItWorksItem: FC<HowItWorksItemProps> = ({
	title,
	description,
	image
}) => {
	return (
		<div className='flex flex-col items-center w-[400px]'>
			<div className='flex flex-col gap-[16px]'>
				<div className='font-semibold text-[25px] leading-[100%] text-center'>
					{title}
				</div>
				<div className='text-center max-w-[310px]'>{description}</div>
			</div>
			<img src={image} alt='Image' />
		</div>
	)
}
