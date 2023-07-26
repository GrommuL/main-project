import { setUser } from '@/store/slices/authSlice'
import { UserInfo } from '@/types/User'
import { useAppDispatch } from '@/utils/hooks/redux'
import Cookies from 'js-cookie'

export const AuthService = () => {
	const dispatch = useAppDispatch()

	const saveTokenToStorage = (accessToken: string) => {
		Cookies.set('accessToken', accessToken)
	}

	const removeTokenFromStorage = () => {
		Cookies.remove('accessToken')
	}

	const saveToStorage = (data: UserInfo) => {
		if (data.accessToken && data.user) {
			saveTokenToStorage(data.accessToken)
			dispatch(setUser(data.user))
		}
	}

	return {
		saveToStorage,
		removeTokenFromStorage,
		saveTokenToStorage
	}
}
