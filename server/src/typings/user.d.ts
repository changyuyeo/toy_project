export interface IPayload {
	sub: string
	iat?: number
	exp?: number
}

export interface IUser {
	id: string
	email: string
	nickname: string
	birthday: string
	imgUrl: string
}
