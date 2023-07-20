import { User, UserInfo } from '@/types/User'
import { instance } from '../axios/instance'

export const useSignIn = () => {
	const loginUser = async (userData: User) => {
		const { data }: UserInfo = await instance.post('login', userData)
		console.log(data)
	}
	return {
		loginUser
	}
}
