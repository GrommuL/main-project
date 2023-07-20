import { User } from '@/types/User'
import { instance } from '../axios/instance'
import axios from 'axios'

export const useSignIn = () => {
	const loginUser = async (userData: User) => {
		try {
			const response = await instance.post('login', userData)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response)
			} else if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}
	return {
		loginUser
	}
}
