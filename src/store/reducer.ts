import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import { CommonState, UserState } from '@typings/reduxState'
import authSlice, { AuthState } from '@store/auth'
import userSlice from '@store/user'
import commonSlice from '@store/common'

export interface State {
	auth: AuthState
	common: CommonState
	user: UserState
}

const rootReducer = (
	state: State | undefined,
	action: AnyAction
): CombinedState<State> => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default: {
			const combineReducer = combineReducers({
				auth: authSlice,
				common: commonSlice,
				user: userSlice
			})
			return combineReducer(state, action)
		}
	}
}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
