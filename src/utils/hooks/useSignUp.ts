import { RegisterFields } from '@/types/RegisterFields'
import { instance } from '../axios/instance'
import axios from 'axios'

export const useSignUp = () => {
	const createUser = async (userData: RegisterFields) => {
		const user = {
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: userData.password,
			acceptTerms: userData.acceptTerms,
			accountRole: userData.accountRole
		}

		try {
			await instance.post('users', user)
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
