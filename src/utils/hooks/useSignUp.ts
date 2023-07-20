import { User, UserInfo } from '@/types/User'
import { instance } from '../axios/instance'
import axios from 'axios'

export const useSignUp = () => {
	const createUser = async (userData: User) => {
		const currentDate = new Date()
		const user = {
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: userData.password,
			acceptTerms: userData.acceptTerms,
			accountRole: userData.accountRole,
			createdAt: currentDate.getTime()
		}

		try {
			const { data }: UserInfo = await instance.post('users', user)
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
