export interface ISignUpAPIBody {
	email: string
	nickname: string
	password: string
	birthday: string
}

export interface IUser {
	id: string
	email: string
	nickname: string
	birthday: string
	imgUrl: string
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
