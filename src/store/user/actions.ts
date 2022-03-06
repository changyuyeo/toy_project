import { createAsyncThunk } from '@reduxjs/toolkit'

import { signUpAPI, SignUpAPIBody } from '@lib/api/user'
import { saveAuthCookie } from '@utils/cookies'

export const signUpAction = createAsyncThunk(
	'user/signUp',
	async (body: SignUpAPIBody) => {
		const { data } = await signUpAPI(body)
		saveAuthCookie(data.access_token)
		return data
	}
)
