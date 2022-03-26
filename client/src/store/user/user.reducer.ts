import produce from 'immer'

import * as actions from '@store/user/user.types'
import { IUserState } from '@typings/reduxState'
import { UserActionType } from './user.actions'

const initialState: IUserState = {
	loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
	myData: null
}

const userReducers = (state = initialState, action: UserActionType) =>
	produce(state, draft => {
		switch (action.type) {
			//* SIGN_UP
			case actions.SIGN_UP_REQUEST:
				draft.signUpLoading = true
				draft.signUpDone = false
				draft.signUpError = null
				break
			case actions.SIGN_UP_SUCCESS:
				draft.signUpLoading = false
				draft.signUpDone = true
				draft.myData = action.data
				break
			case actions.SIGN_UP_FAILURE:
				draft.signUpLoading = false
				draft.signUpError = action.error
				break
			default:
				break
		}
	})

export default userReducers
