import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { SignUp, Home } from '@/pages'

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'register', element: <SignUp /> }
		]
	}
])
