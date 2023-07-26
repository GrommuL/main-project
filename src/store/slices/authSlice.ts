import { User, UserInfo } from '@/types/User'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Pick<UserInfo, 'user'> = {
	user: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		},
		logoutUser: (state) => {
			state.user = null
		}
	}
})

export const { setUser, logoutUser } = authSlice.actions

export default authSlice.reducer
