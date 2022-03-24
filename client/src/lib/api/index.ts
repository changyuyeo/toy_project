import axios from 'axios'

const { NEXT_PUBLIC_API_URL } = process.env

const createInstance = (url: string) =>
	axios.create({
		baseURL: `${NEXT_PUBLIC_API_URL}/${url}`,
		withCredentials: true
	})

export const users = createInstance('users')
