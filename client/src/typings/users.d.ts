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
