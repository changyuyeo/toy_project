import { useDispatch } from 'react-redux'

import { useSelector } from '@store/index'
import { setValidateModeAction } from '@store/common/common.actions'

const useValidateMode = () => {
	const dispatch = useDispatch()
	const { validateMode } = useSelector(state => state.common)

	const setValidateMode = (value: boolean) =>
		dispatch(setValidateModeAction(value))

	return { validateMode, setValidateMode }
}

export default useValidateMode
