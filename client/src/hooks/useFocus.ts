import { FocusEventHandler, useCallback, useState } from 'react'

type ReturnType = [boolean, FocusEventHandler<HTMLInputElement>]

const useFocus = (): ReturnType => {
	const [focused, setFocused] = useState(false)
	const onFocused = useCallback(() => setFocused(true), [])

	return [focused, onFocused]
}

export default useFocus
