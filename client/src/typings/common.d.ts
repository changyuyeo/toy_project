export type TAuthMode = 'signup' | 'login'

export interface IError {
	response: {
		data: {
			message: string | Array<string>
		}
	}
}
