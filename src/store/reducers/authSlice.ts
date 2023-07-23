import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	accessToken: '',
	user: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {}
})

export default authSlice.reducer
