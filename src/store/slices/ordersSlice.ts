import { Order, Orders } from '@/types/OrderType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Orders = {
	orders: []
}

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		getOrders: (state, action: PayloadAction<Orders>) => {
			state.orders = action.payload.orders
		}
	}
})

export const { getOrders } = ordersSlice.actions

export default ordersSlice.reducer
