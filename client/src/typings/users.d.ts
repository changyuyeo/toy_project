export interface ILoginAPIBody {
	email: string
	password: string
}

export interface ISignUpAPIBody extends ILoginAPIBody {
	nickname: string
	birthday: string
}

export interface IUser {
	id: string
	email: string
	nickname: string
	birthday: string
	imgUrl: string
}
