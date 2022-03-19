import styled from 'styled-components'
import colors from '@styles/colors'

export const SignUpModalContainer = styled.div`
	width: 568px;
	padding: 32px;
	background-color: white;
	z-index: 11;

	.close-icon {
		cursor: pointer;
		display: block;
		margin: 0 0 40px auto;
	}

	.description {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 16px 0;
		&__label {
			font-size: 16px;
			font-weight: 600;
		}
		&__info {
			color: ${colors.charcoal};
		}
	}
`

export const ButtonWrapper = styled.div`
	margin-top: 16px;
	padding-bottom: 16px;
	border-bottom: 1px solid ${colors.gray_eb};
`
