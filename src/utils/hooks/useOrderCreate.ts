import { Order } from '@/types/OrderType'
import axios, { AxiosResponse } from 'axios'
import { instance } from '../axios/instance'

export const useOrderCreate = () => {
	const orderCreate = async (order: Order) => {
		try {
			const response: AxiosResponse<Order, Order> = await instance.post(
				'tasks',
				order
			)
			return response.data
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response)
			} else if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}
	return {
		orderCreate
	}
}
