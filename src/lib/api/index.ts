import axios from 'axios'

const instance = (url: string) =>
	axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
		withCredentials: true
	})

export const user = instance('user')
