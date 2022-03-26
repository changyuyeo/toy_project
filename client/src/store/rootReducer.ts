import { CombinedState, combineReducers, Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import userReducers from '@store/user/user.reducer'
import { IState } from '@typings/reduxState'
import { UserActionType } from './user/user.actions'

type HydrateAcitonType = { type: typeof HYDRATE; payload: IState }
type RootStateType = CombinedState<IState>
type RootActionType = UserActionType | HydrateAcitonType

const rootReducer = (state: RootStateType, action: RootActionType) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default:
			const combineReducer = combineReducers({
				user: userReducers
			})
			return combineReducer(state, action)
	}
}

export type RootState = ReturnType<typeof rootReducer>
export type RootReducerType = Reducer<RootStateType, RootActionType>

export default rootReducer
