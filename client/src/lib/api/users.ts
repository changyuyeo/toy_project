import { users } from '@lib/api'
import { ILoginAPIBody, ISignUpAPIBody, IUser } from '@typings/users'
import { AxiosPromise } from 'axios'

export const signUpAPI = (body: ISignUpAPIBody): AxiosPromise<IUser> =>
	users.post('/signup', body)

export const logInAPI = (body: ILoginAPIBody): AxiosPromise<IUser> =>
	users.post('/login', body)
