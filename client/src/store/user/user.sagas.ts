import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@lib/api/users'
import * as actions from '@store/user/user.types'
import * as types from '@store/user/user.actions'
import { IError } from '@typings/common'

function* signUp(action: types.SignUpActionType) {
	try {
		yield call(apis.signupAPI, action.data)
		yield put(types.signUpSuccess())
	} catch (error) {
		yield put(types.signUpFailure((error as IError).response.data.message))
	}
}

//* watch
function* watchSignUp() {
	yield takeLatest(actions.SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
	yield all([fork(watchSignUp)])
}
