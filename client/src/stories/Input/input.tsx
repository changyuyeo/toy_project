import { FC, InputHTMLAttributes } from 'react'
import { StyledInput } from './input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
}

const InputComponent: FC<InputProps> = ({ icon, ...props }) => {
	return (
		<StyledInput iconExist={!!icon}>
			<input {...props} />
			<div className="icon-wrapper">{icon}</div>
		</StyledInput>
	)
}

export default InputComponent
