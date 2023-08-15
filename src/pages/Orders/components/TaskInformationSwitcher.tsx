import { Toggle } from '@/components/ui/Toggle'
import { Dispatch, FC, SetStateAction } from 'react'
import { TaskInformationToggle } from '../Orders'

type TaskInformationSwitcherProps = {
	taskInformation: string
	setTaskInformation: Dispatch<SetStateAction<TaskInformationToggle>>
}

export const TaskInformationSwitcher: FC<TaskInformationSwitcherProps> = ({
	taskInformation,
	setTaskInformation
}) => {
	return (
		<div className='flex items-center'>
			<Toggle
				id='details'
				label='Детали задания'
				onClick={() => setTaskInformation('details')}
				value='details'
				name='taskDetails'
				variant='left'
				defaultChecked
			/>
			<Toggle
				id='responses'
				label='Отклики'
				name='taskDetails'
				onClick={() => setTaskInformation('responses')}
				value='responses'
				variant='right'
				className={
					taskInformation === 'responses' ? 'bg-primary text-white' : ''
				}
			/>
		</div>
	)
}
