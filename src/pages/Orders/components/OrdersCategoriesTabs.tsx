import { Tab } from '@/components/ui/tabs'
import { useState } from 'react'

type TaskCategoryTabs = 'all-tasks' | 'agreed-terms' | 'in-work' | 'closed'

export const OrdersCategoriesTabs = () => {
	const [taskCategory, setTaskCategory] =
		useState<TaskCategoryTabs>('all-tasks')
	return (
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
	)
}
