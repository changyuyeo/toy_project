export interface UserDataType {
	email: string
	firstname: string
	lastname: string
	birthday: string
	profileImage: string
}

export interface SignUpDataType {
	user: UserType
	access_token: string
}
