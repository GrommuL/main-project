import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { SignUp, Home, SignIn, NotFound, Profile } from '@/pages'

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'register', element: <SignUp /> },
			{ path: 'login', element: <SignIn /> },
			{ path: 'profile', element: <Profile /> },
			{ path: '*', element: <NotFound /> }
		]
	}
])
