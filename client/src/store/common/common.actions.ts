import { SET_VAILDATE_MODE } from './common.types'

export const setValidateModeAction = (data: boolean) => ({
	type: SET_VAILDATE_MODE,
	data
})

export type ValidateModeActionType = ReturnType<typeof setValidateModeAction>

export type CommonActionType = ValidateModeActionType
