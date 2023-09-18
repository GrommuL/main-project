import { getOrders } from '@/store/slices/ordersSlice'
import { Order } from '@/types/OrderType'
import { instance } from '@/utils/axios/instance'
import { useAppDispatch } from '@/utils/hooks/redux'
import { AxiosResponse } from 'axios'

export const OrderService = () => {
	const dispatch = useAppDispatch()
	const getAllOrder = async () => {
		const response: AxiosResponse<Order[]> = await instance.get(
			'http://localhost:8080/tasks'
		)
		if (response.data) {
			dispatch(
				getOrders({
					orders: response.data
				})
			)
		}
	}
	return {
		getAllOrder
	}
}
