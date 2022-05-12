import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '@store/index'
import { setValidateModeAction } from '@store/common/common.actions'

const useValidateMode = () => {
	const dispatch = useDispatch()
	const { validateMode } = useSelector(state => state.common)

	const setValidateMode = useCallback(
		(value: boolean) => dispatch(setValidateModeAction(value)),
		[dispatch]
	)

	return { validateMode, setValidateMode }
}

export default useValidateMode
