import { User, UserInfo } from '@/types/User'
import { instance } from '../axios/instance'
import { useNavigate } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { AuthService } from '@/services/AuthService'

export const useSignUp = () => {
	const { saveToStorage } = AuthService()
	const navigate = useNavigate()

	const createUser = async (userData: User) => {
		const currentDate = new Date()
		const user = {
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: userData.password,
			acceptTerms: userData.acceptTerms,
			accountRole: userData.accountRole,
			createdAt: currentDate.getTime(),
			avatar: '',
			about: '',
			portfolio: []
		}

		try {
			const response: AxiosResponse<UserInfo, UserInfo> = await instance.post(
				'users',
				user
			)
			if (response.data) {
				saveToStorage(response.data)
				navigate('/')
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response)
			} else if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}
	return {
		createUser
	}
}
