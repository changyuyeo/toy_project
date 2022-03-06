import styled, { css } from 'styled-components'
import colors from '@styles/colors'

interface InputContainerProps {
	iconExist: boolean
	isValid?: boolean
	useValidation?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
	label {
		span {
			display: block;
			margin-bottom: 8px;
		}
	}
	input {
		position: relative;
		width: 100%;
		height: 46px;
		padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px ' : '0 11px')};
		border: 1px solid ${colors.gray_eb};
		border-radius: 4px;
		font-size: 16px;
		outline: none;
		& ::placeholder {
			color: ${colors.gray_76};
		}
		& :focus {
			border-color: ${colors.dark_cyan};
		}
	}
	svg {
		position: absolute;
		right: 11px;
		bottom: 17px;
	}
	.input-error-message {
		margin-top: 8px;
		font-weight: 600;
		font-size: 14px;
		color: ${colors.tawny};
	}
	${({ useValidation, isValid }) =>
		useValidation &&
		!isValid &&
		css`
			input {
				background-color: ${colors.snow};
				border-color: ${colors.orange};
				& :focus {
					border-color: ${colors.orange};
				}
			}
		`}
	${({ useValidation, isValid }) =>
		useValidation &&
		isValid &&
		css`
			input {
				border-color: ${colors.dark_cyan};
			}
		`}
`
