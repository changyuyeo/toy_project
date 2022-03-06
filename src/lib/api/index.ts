import Axios from 'axios'

const instance = (url: string) =>
	Axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
		withCredentials: true
	})

export const user = instance('user')
