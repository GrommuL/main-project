import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { SignUp, Home, SignIn, NotFound } from '@/pages'

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'register', element: <SignUp /> },
			{ path: 'login', element: <SignIn /> },
			{ path: '*', element: <NotFound /> }
		]
	}
])
