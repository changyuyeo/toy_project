import { ILoginAPIBody, ISignUpAPIBody, IUser } from '@typings/users'
import * as actions from '@store/user/user.types'

//* 회원가입
export const signUpRequest = (data: ISignUpAPIBody) => ({
	type: actions.SIGN_UP_REQUEST,
	data
})
export const signUpSuccess = (data: IUser) => ({
	type: actions.SIGN_UP_SUCCESS,
	data
})
export const signUpFailure = (error: string) => ({
	type: actions.SIGN_UP_FAILURE,
	error
})

//* 로그인
export const logInRequest = (data: ILoginAPIBody) => ({
	type: actions.LOG_IN_REQUEST,
	data
})
export const logInSuccess = (data: IUser) => ({
	type: actions.LOG_IN_SUCCESS,
	data
})
export const logInFailure = (error: string) => ({
	type: actions.LOG_IN_FAILURE,
	error
})

//* 액션 타입
export type SignUpActionType = ReturnType<typeof signUpRequest>
export type LoginActionType = ReturnType<typeof logInRequest>

export type UserActionType =
	| ReturnType<typeof signUpRequest>
	| ReturnType<typeof signUpSuccess>
	| ReturnType<typeof signUpFailure>
	| ReturnType<typeof logInRequest>
	| ReturnType<typeof logInSuccess>
	| ReturnType<typeof logInFailure>
