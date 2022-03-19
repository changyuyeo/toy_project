import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useCallback,
	useState
} from 'react'

type ElementType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
type InputEventType = ChangeEvent<ElementType>
type RetrunTypes<T> = [
	T | undefined,
	(e: InputEventType) => void,
	Dispatch<SetStateAction<T | undefined>>
]

const useInput = <T = string>(initalData?: T): RetrunTypes<T> => {
	const [value, setValue] = useState(initalData)

	const onChangeValue = useCallback(
		(e: InputEventType) => setValue(e.target.value as unknown as T),
		[]
	)

	return [value, onChangeValue, setValue]
}

export default useInput
