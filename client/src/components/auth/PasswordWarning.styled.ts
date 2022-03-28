import colors from '@styles/colors'
import styled from 'styled-components'

interface Props {
	isValid: boolean
}

export const PasswordWarningContanier = styled.p<Props>`
	color: ${({ isValid }) => (isValid ? colors.davidson_orange : colors.green)};
	display: flex;
	align-items: center;
	> svg {
		margin-right: 8px;
	}
`
