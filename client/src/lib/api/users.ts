import { users } from '@lib/api'
import { ISignUpAPIBody, IUser } from '@typings/users'
import { AxiosPromise } from 'axios'

export const signupAPI = (body: ISignUpAPIBody): AxiosPromise<IUser> =>
	users.post('/signup', body)
