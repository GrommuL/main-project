import { getFreelancers } from '@/store/slices/usersSlice'
import { User } from '@/types/User'
import { useAppDispatch } from '@/utils/hooks/redux'
import axios, { AxiosResponse } from 'axios'

export const UserService = () => {
	const dispatch = useAppDispatch()
	const getAllUsers = async () => {
		try {
			const response: AxiosResponse<User[]> = await axios.get(
				'http://localhost:8080/users'
			)
			if (response.data) {
				dispatch(getFreelancers({ users: [...response.data] }))
			}
		} catch (error) {
			console.log(error)
		}
	}
	return {
		getAllUsers
	}
}
