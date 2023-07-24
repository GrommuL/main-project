import { UserInfo } from '@/types/User'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserInfo = {
	accessToken: '',
	user: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserInfo>) => {
			state.accessToken = action.payload.accessToken
			state.user = action.payload.user
		},
		logoutUser: (state) => {
			state.accessToken = ''
			state.user = null
		}
	}
})

export const { setUser, logoutUser } = authSlice.actions

export default authSlice.reducer
