import { Header } from './header'
import { Footer } from './footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { AuthService } from '@/services/auth'
import { logoutUser } from '@/store/slices/authSlice'

export const Layout = () => {
	const { removeTokenFromStorage } = AuthService()
	const pathname = useLocation()
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.auth.user)

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
