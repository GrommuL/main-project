import { User, UserInfo } from '@/types/User'
import { instance } from '../axios/instance'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useAppDispatch } from './redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '@/store/slices/authSlice'

export const useSignIn = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [message, setMessage] = useState('')
	const loginUser = async (userData: User) => {
		try {
			const response: AxiosResponse<UserInfo, UserInfo> = await instance.post(
				'login',
				userData
			)
			if (response.status === 200) {
				setMessage('')
				dispatch(setUser(response.data))
				navigate('/')
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 400) {
					setMessage('Неправильный email или пароль')
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
