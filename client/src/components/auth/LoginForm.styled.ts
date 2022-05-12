import styled from 'styled-components'
import colors from '@styles/colors'

export const LoginFormContainer = styled.form`
	.login-input {
		&__wrapper {
			position: relative;
			margin-bottom: 16px;
		}
		&--cursor {
			cursor: pointer;
		}
	}

	.login-button {
		margin-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid ${colors.gray_eb};
	}
`
