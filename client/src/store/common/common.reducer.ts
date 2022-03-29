import produce from 'immer'

import { ICommonState } from '@typings/reduxState'
import { CommonActionType } from './common.actions'
import * as actions from '@store/common/common.types'

const initialState: ICommonState = {
	validateMode: false,
	authMode: 'signup'
}

const commonReducers = (state = initialState, action: CommonActionType) =>
	produce(state, draft => {
		switch (action.type) {
			case actions.SET_VAILDATE_MODE:
				draft.validateMode = action.data
				break
			case actions.SET_AUTH_MODE:
				draft.authMode = action.data
				break
			default:
				break
		}
	})

export default commonReducers
