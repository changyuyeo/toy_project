import { users } from '@lib/api'
import { ISignUpAPIBody } from '@typings/users'

export const signupAPI = (body: ISignUpAPIBody) => users.post('/signup', body)
