import { ISignUpAPIBody } from '@typings/users'
import * as actions from '@store/user/user.types'

//* 회원가입
export const signUpRequest = (data: ISignUpAPIBody) => ({
	type: actions.SIGN_UP_REQUEST,
	data
})

export const signUpSuccess = () => ({ type: actions.SIGN_UP_SUCCESS })

export const signUpFailure = (error: string) => ({
	type: actions.SIGN_UP_FAILURE,
	error
})

//* 액션 타입
export type SignUpActionType = ReturnType<typeof signUpRequest>

export type UserActionType =
	| ReturnType<typeof signUpRequest>
	| ReturnType<typeof signUpSuccess>
	| ReturnType<typeof signUpFailure>
