import { LinkButton } from '@/components/ui/buttons'
import { SharedIcon, ViewIcon } from '@/components/ui/icons'
import { Tab } from '@/components/ui/tabs'
import { useState } from 'react'
import { TaskInformationBlock, TaskInformationSwitcher } from './components'

type TaskCategoryTabs = 'all-tasks' | 'agreed-terms' | 'in-work' | 'closed'
export type TaskInformationToggle = 'details' | 'responses'

export const Orders = () => {
	const [taskCategory, setTaskCategory] =
		useState<TaskCategoryTabs>('all-tasks')

	const [taskInformation, setTaskInformation] =
		useState<TaskInformationToggle>('details')

	return (
		<main className='pt-[50px] pb-[100px]'>
			<div className='container'>
				<div className='flex flex-col gap-[50px]'>
					<div className='flex items-center justify-between px-[32px] py-[16px] bg-white rounded-[12px] shadow-dropdown'>
						<span>Создайте заказ и выберите исполнителя</span>
						<LinkButton href='/create-task' label='Создать' />
					</div>
					<div>
						<div className='flex items-center gap-[24px]'>
							<Tab
								id='all-tasks'
								category={taskCategory}
								label='Все заказы'
								onClick={() => setTaskCategory('all-tasks')}
							/>
							<Tab
								id='agreed-terms'
								category={taskCategory}
								label='Согласование условий'
								onClick={() => setTaskCategory('agreed-terms')}
							/>
							<Tab
								id='in-work'
								category={taskCategory}
								label='В работе'
								onClick={() => setTaskCategory('in-work')}
							/>
							<Tab
								id='closed'
								category={taskCategory}
								label='Закрытые'
								onClick={() => setTaskCategory('closed')}
							/>
						</div>
						<div className='p-[32px]'>
							<div className='flex flex-col gap-[32px]'>
								<div className='flex flex-col gap-[12px]'>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-[16px]'>
											<h3 className='text-[32px] font-bold leading-[38px]'>
												Лендинг на Тильде
											</h3>
											<button
												className='w-[44px] h-[44px] rounded-full bg-bgSecondary flex items-center justify-center border border-transparent hover:border-primaryHover transition'
												onClick={() => {
													console.log('click')
												}}
											>
												<SharedIcon />
											</button>
											<div className='flex items-center gap-[4px]'>
												<ViewIcon />
												<span>150</span>
											</div>
										</div>
										<span className='text-[32px] leading-[45px]'>
											до 30 000 руб.
										</span>
									</div>
									<div>Создано 03 октября 2022</div>
								</div>
								<TaskInformationSwitcher
									taskInformation={taskInformation}
									setTaskInformation={setTaskInformation}
								/>
								<TaskInformationBlock taskInformation={taskInformation} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
