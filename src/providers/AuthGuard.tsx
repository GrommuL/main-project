import { useAppSelector } from '@/utils/hooks/redux'
import { ReactNode, FC } from 'react'
import { Navigate } from 'react-router-dom'

type AuthGuardProps = {
	children: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
	const isAuth = useAppSelector((state) => state.auth.isAuth)
	return isAuth ? children : <Navigate to='/' />
}
