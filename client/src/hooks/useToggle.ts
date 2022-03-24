import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>]

const useToggle = (initalData: boolean): ReturnType => {
	const [value, setValue] = useState(initalData)
	const onToggleValue = useCallback(() => setValue(prev => !prev), [])

	return [value, onToggleValue, setValue]
}

export default useToggle
