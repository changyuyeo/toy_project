import { FC, InputHTMLAttributes, memo } from 'react'

import { useSelector } from '@store/index'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
	label?: string
	isValid?: boolean
	useValidation?: boolean
	errorMessage?: string
}

const Input: FC<InputProps> = ({
	label,
	icon,
	isValid = false,
	useValidation = true,
	errorMessage,
	...props
}) => {
	const { validateMode } = useSelector(state => state.common)

	return (
		<InputContainer
			iconExist={!!icon}
			isValid={isValid}
			useValidation={validateMode && useValidation}
		>
			<div className="input-wrapper">
				{label ? (
					<label>
						<span>{label}</span>
						<input {...props} />
					</label>
				) : (
					<input {...props} />
				)}
				{icon}
			</div>
			{useValidation && validateMode && !isValid && errorMessage && (
				<p className="input-error-message">{errorMessage}</p>
			)}
		</InputContainer>
	)
}

export default memo(Input)
