import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
	SignUp,
	Home,
	SignIn,
	NotFound,
	Profile,
	CreateTask,
	Orders
} from '@/pages'
import { AuthGuard } from '@/providers/AuthGuard'
import { TasksCatalog } from '@/pages/TasksCatalog'

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'register', element: <SignUp /> },
			{ path: 'login', element: <SignIn /> },
			{
				path: 'profile',
				element: (
					<AuthGuard>
						<Profile />
					</AuthGuard>
				)
			},
			{
				path: 'create-task',
				element: (
					<AuthGuard>
						<CreateTask />
					</AuthGuard>
				)
			},
			{
				path: 'orders',
				element: (
					<AuthGuard>
						<Orders />
					</AuthGuard>
				)
			},
			{
				path: 'catalog',
				element: (
					<AuthGuard>
						<TasksCatalog />
					</AuthGuard>
				)
			},
			{ path: '*', element: <NotFound /> }
		]
	}
])
