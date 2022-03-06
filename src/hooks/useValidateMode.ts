import { useDispatch } from 'react-redux'

import { useSelector } from '../store'
import { setValidateMode } from '../store/common'

export default () => {
	const dispatch = useDispatch()
	const { validateMode } = useSelector(state => state.common)

	const onChangeValidateMode = (value: boolean) =>
		dispatch(setValidateMode(value))

	return { validateMode, onChangeValidateMode }
}
