import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import { CommonState, UserState } from '@typings/reduxState'
import userSlice from '@store/user'
import commonSlice from '@store/common'

export interface State {
	user: UserState
	common: CommonState
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
				user: userSlice,
				common: commonSlice
			})
			return combineReducer(state, action)
		}
	}
}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
