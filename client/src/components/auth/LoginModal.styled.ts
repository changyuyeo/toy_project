import styled from 'styled-components'
import colors from '@styles/colors'

export const LoginModalContainer = styled.div`
	width: 568px;
	padding: 32px;
	background-color: white;
	z-index: 11;

	.close-icon {
		cursor: pointer;
		display: block;
		margin: 0 0 40px auto;
	}

	.set-signup {
		display: flex;
		margin-top: 10px;
		&__button {
			color: ${colors.dark_cyan};
			margin-left: 8px;
			cursor: pointer;
		}
	}
`
