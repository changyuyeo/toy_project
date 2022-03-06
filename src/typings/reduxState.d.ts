import { UserDataType } from '@typings/user'

export interface CommonState {
	validateMode: boolean
}

export interface UserState {
	logInLoading: boolean
	logInDone: boolean
	logInError: string | null
	user: UserDataType | null
}
