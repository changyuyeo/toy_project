import { user } from '@lib/api'
import { SignUpDataType } from '@typings/user'
import { AxiosPromise } from 'axios'

export interface SignUpAPIBody {
	email: string
	firstname: string
	lastname: string
	password: string
	birthday: string
}

//* 회원가입 API
export const signUpAPI = (body: SignUpAPIBody): AxiosPromise<SignUpDataType> =>
	user.post('/signup', body)
