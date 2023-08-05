import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { SignUp, Home, SignIn, NotFound, Profile, CreateTask } from '@/pages'
import { AuthGuard } from '@/providers/AuthGuard'

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
			{ path: '*', element: <NotFound /> }
		]
	}
])
