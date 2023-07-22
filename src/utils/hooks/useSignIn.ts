import { User } from '@/types/User'
import { instance } from '../axios/instance'
import axios from 'axios'
import { useState } from 'react'

export const useSignIn = () => {
	const [message, setMessage] = useState('')
	const loginUser = async (userData: User) => {
		try {
			const response = await instance.post('login', userData)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 400) {
					setMessage(
						'Такого пользователя не существует, неправильный email или пароль'
					)
				}
				console.log(error.response)
			} else if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}
	return {
		loginUser,
		message
	}
}
