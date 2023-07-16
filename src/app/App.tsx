import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './AppRouter'

export const App = () => {
	return (
		<>
			<RouterProvider router={AppRouter} />
		</>
	)
}
