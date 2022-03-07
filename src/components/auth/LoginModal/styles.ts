import colors from '@styles/colors'
import styled from 'styled-components'

export const LoginModalContainer = styled.form`
	width: 568px;
	padding: 32px;
	background-color: white;
	z-index: 11;
	.modal-close-x-icon {
		cursor: pointer;
		display: block;
		margin: 0 0 40px auto;
	}
	.login-input-wrapper {
		position: relative;
		margin-bottom: 16px;
	}
	.login-password-input-wrapper {
		svg {
			cursor: pointer;
		}
	}
	.login-modal-submit-button-wrapper {
		margin-bottom: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid ${colors.gray_eb};
	}
	.login-modal-set-signup {
		color: ${colors.dark_cyan};
		margin-left: 8px;
		cursor: pointer;
	}
`
