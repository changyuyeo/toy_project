import { user } from '@lib/api'
import { SignUpDataType } from '@typings/user'
import { Axios, AxiosPromise } from 'axios'

export interface LoginAPIBody {
	email: string
	password: string
}

export interface SignUpAPIBody extends LoginAPIBody {
	firstname: string
	lastname: string
	birthday: string
}

//* 유저정보 API
export const userDataAPI = (): AxiosPromise<SignUpDataType> => user.get('/me')

//* 회원가입 API
export const signUpAPI = (body: SignUpAPIBody): AxiosPromise<SignUpDataType> =>
	user.post('/signup', body)

//* 로그인 API
export const loginAPI = (body: LoginAPIBody): AxiosPromise<SignUpDataType> =>
	user.post('/login', body)
