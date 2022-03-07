import { createAsyncThunk } from '@reduxjs/toolkit'

import { loginAPI, LoginAPIBody, signUpAPI, SignUpAPIBody } from '@lib/api/user'
import { saveAuthCookie } from '@utils/cookies'

export const signUpAction = createAsyncThunk(
	'user/signUp',
	async (body: SignUpAPIBody) => {
		const { data } = await signUpAPI(body)
		saveAuthCookie(data.access_token)
		return data
	}
)

export const loginAction = createAsyncThunk(
	'user/login',
	async (body: LoginAPIBody) => {
		const { data } = await loginAPI(body)
		saveAuthCookie(data.access_token)
		return data
	}
)
