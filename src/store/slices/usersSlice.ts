import { Users } from '@/types/User'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Users = {
	users: []
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action: PayloadAction<Users>) => {
			state.users = action.payload.users
		},
		getFreelancers: (state, action: PayloadAction<Users>) => {
			state.users = action.payload.users.filter(
				(user) => user.accountRole === 'freelancer'
			)
		}
	}
})

export const { getUsers, getFreelancers } = usersSlice.actions

export default usersSlice.reducer
