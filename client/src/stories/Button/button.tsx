import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { StyledButton } from './button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const ButtonComponent: FC<ButtonProps> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>
}

export default ButtonComponent
