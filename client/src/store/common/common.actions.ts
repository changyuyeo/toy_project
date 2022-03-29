import { TAuthMode } from '@typings/common'
import { SET_AUTH_MODE, SET_VAILDATE_MODE } from './common.types'

export const setValidateModeAction = (data: boolean) => ({
	type: SET_VAILDATE_MODE,
	data
})

export const setAuthModeAction = (data: TAuthMode) => ({
	type: SET_AUTH_MODE,
	data
})

export type ValidateModeActionType = ReturnType<typeof setValidateModeAction>
export type AuthModeActionType = ReturnType<typeof setAuthModeAction>

export type CommonActionType = ValidateModeActionType | AuthModeActionType
