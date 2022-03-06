import { createSlice } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

import { UserState } from '@typings/reduxState'
import { signUpAction } from './actions'

const initialState: UserState = {
	logInLoading: false,
	logInDone: false,
	logInError: null,
	user: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		//* signUp
		builder.addCase(signUpAction.pending, state => {
			state.logInLoading = true
			state.logInDone = false
			state.logInError = null
		})
		builder.addCase(signUpAction.fulfilled, (state, action) => {
			state.logInLoading = false
			state.logInDone = true
			state.user = action.payload.user
		})
		builder.addCase(signUpAction.rejected, (state, action: AnyAction) => {
			state.logInLoading = false
			state.logInError = action.error.message
		})
	}
})

export default userSlice.reducer
