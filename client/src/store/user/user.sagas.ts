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
type SignUpReturnType = SagaReturnType<typeof apis.signupAPI>

//* sagas
function* signUp(action: types.SignUpActionType) {
	try {
		const { data }: SignUpReturnType = yield call(apis.signupAPI, action.data)
		yield put(types.signUpSuccess(data))
	} catch (error) {
		const { message } = (error as IError).response.data
		const errorMsg = message.length > 0 ? message[0] : message
		yield put(types.signUpFailure(errorMsg as string))
	}
}

//* watch
function* watchSignUp() {
	yield takeLatest(actions.SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
	yield all([fork(watchSignUp)])
}
