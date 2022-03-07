import { AnyAction } from 'redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserState } from '@typings/reduxState'
import { loginAction, signUpAction } from './actions'
import { UserDataType } from '@typings/user'

const initialState: UserState = {
	logInLoading: false,
	logInDone: false,
	logInError: null,
	user: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoggedUser(state, action: PayloadAction<UserDataType>) {
			state.user = action.payload
		}
	},
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
		//* login
		builder.addCase(loginAction.pending, state => {
			state.logInLoading = true
			state.logInDone = false
			state.logInError = null
		})
		builder.addCase(loginAction.fulfilled, (state, action) => {
			state.logInLoading = false
			state.logInDone = true
			state.user = action.payload.user
		})
		builder.addCase(loginAction.rejected, (state, action: AnyAction) => {
			state.logInLoading = false
			state.logInError = action.error.message
		})
	}
})

export const { setLoggedUser } = userSlice.actions
export default userSlice.reducer
