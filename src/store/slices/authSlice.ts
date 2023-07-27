import { AuthUser, User } from '@/types/User'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthUser = {
	user: null,
	isAuth: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
			state.isAuth = true
		},
		logoutUser: (state) => {
			state.user = null
			state.isAuth = false
		}
	}
})

export const { setUser, logoutUser } = authSlice.actions

export default authSlice.reducer
