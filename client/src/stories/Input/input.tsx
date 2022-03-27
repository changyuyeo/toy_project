import { FC, InputHTMLAttributes } from 'react'

import { useSelector } from '@store/index'
import { StyledInput } from './input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
	isValid?: boolean //* 벨리데이션 검사 결과
	useValidation?: boolean //* 벨리데이션 검사 여부
	errorMessage?: string
}

const InputComponent: FC<InputProps> = ({
	icon,
	isValid = false,
	useValidation = true,
	errorMessage,
	...props
}) => {
	//* 벨리데이션 모드 (true -> 벨리데이션 검사 시작)
	const { validateMode } = useSelector(state => state.common)

	return (
		<StyledInput
			iconExist={!!icon}
			isValid={isValid}
			useValidation={validateMode && useValidation}
		>
			<input {...props} />
			{icon}
			{useValidation && validateMode && !isValid && errorMessage && (
				<p className="error-message">{errorMessage}</p>
			)}
		</StyledInput>
	)
}

export default InputComponent
