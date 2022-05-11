import {
	all,
	call,
	fork,
	put,
	takeLatest,
	SagaReturnType
} from 'redux-saga/effects'

import * as apis from '@lib/api/users'
import * as actions from '@store/user/user.types'
import * as types from '@store/user/user.actions'
import { IError } from '@typings/common'

//* return types
export type SignUpReturnType = SagaReturnType<typeof apis.signUpAPI>
export type LoginReturnType = SagaReturnType<typeof apis.signUpAPI>

//* sagas
function* signUp(action: types.SignUpActionType) {
	try {
		const { data }: SignUpReturnType = yield call(apis.signUpAPI, action.data)
		yield put(types.signUpSuccess(data))
	} catch (error) {
		const { message } = (error as IError).response.data
		const errorMsg = message.length > 0 ? message[0] : message
		yield put(types.signUpFailure(errorMsg as string))
	}
}

function* logIn(action: types.LoginActionType) {
	try {
		const { data }: LoginReturnType = yield call(apis.logInAPI, action.data)
		yield put(types.logInSuccess(data))
	} catch (error) {
		const { message } = (error as IError).response.data
		const errorMsg = message.length > 0 ? message[0] : message
		yield put(types.logInFailure(errorMsg as string))
	}
}

//* watch
function* watchSignUp() {
	yield takeLatest(actions.SIGN_UP_REQUEST, signUp)
}

function* watchLogIn() {
	yield takeLatest(actions.LOG_IN_REQUEST, logIn)
}

export default function* userSaga() {
	yield all([fork(watchSignUp), fork(watchLogIn)])
}
