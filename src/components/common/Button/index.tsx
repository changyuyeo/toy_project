import { ButtonHTMLAttributes, FC } from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>
}

export default Button
