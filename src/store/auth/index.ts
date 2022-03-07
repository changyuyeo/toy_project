import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
	authMode: 'signup' | 'login'
}

const initialState: AuthState = {
	authMode: 'signup'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthMode(state, action: PayloadAction<AuthState['authMode']>) {
			state.authMode = action.payload
		}
	}
})

export const { setAuthMode } = authSlice.actions
export default authSlice.reducer
