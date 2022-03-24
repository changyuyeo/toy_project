import styled from 'styled-components'
import colors from '@styles/colors'

export const SignUpFormContainer = styled.form`
	.signup-input {
		&__wrapper {
			position: relative;
			margin-bottom: 16px;
		}
		&--cursor {
			cursor: pointer;
		}
	}

	.signup-description {
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

	.signup-selector {
		display: flex;
		margin-bottom: 24px;
		&--month {
			margin-right: 16px;
			flex-grow: 1;
		}
		&--day {
			margin-right: 16px;
			width: 25%;
		}
		&--year {
			width: 33%;
		}
	}

	.signup-button {
		margin-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid ${colors.gray_eb};
	}
`
