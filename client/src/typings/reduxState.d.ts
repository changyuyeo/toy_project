export interface ICommonState {
	validateMode: boolean
}

export interface IUserState {
	loadMyInfoLoading: boolean
	loadMyInfoDone: boolean
	loadMyInfoError: string | null
	signUpLoading: boolean
	signUpDone: boolean
	signUpError: string | null
	logInLoading: boolean
	logInDone: boolean
	logInError: string | null
	logOutLoading: boolean
	logOutDone: boolean
	logOutError: string | null
	myData: IUser | null
}

export interface IState {
	common: ICommonState
	user: IUserState
}
