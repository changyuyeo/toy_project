import { FC, InputHTMLAttributes, memo } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
	label?: string
}

const Input: FC<InputProps> = ({ icon, label, ...props }) => {
	return (
		<InputContainer iconExist={!!icon}>
			{label ? (
				<label>
					<span>{label}</span>
					<input {...props} />
				</label>
			) : (
				<input {...props} />
			)}
			{icon}
		</InputContainer>
	)
}

export default memo(Input)
