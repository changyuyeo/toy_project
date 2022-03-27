import { CombinedState, combineReducers, Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import { CommonActionType } from '@store/common/common.actions'
import commonReducers from '@store/common/common.reducer'
import { UserActionType } from '@store/user/user.actions'
import userReducers from '@store/user/user.reducer'
import { IState } from '@typings/reduxState'

type HydrateAcitonType = { type: typeof HYDRATE; payload: IState }
type RootStateType = CombinedState<IState>
type RootActionType = CommonActionType | UserActionType | HydrateAcitonType

const rootReducer = (state: RootStateType, action: RootActionType) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default:
			const combineReducer = combineReducers({
				common: commonReducers,
				user: userReducers
			})
			return combineReducer(state, action)
	}
}

export type RootReducerType = Reducer<RootStateType, RootActionType>

export default rootReducer
