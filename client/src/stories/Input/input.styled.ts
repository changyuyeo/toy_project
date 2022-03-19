import colors from '@styles/colors'
import styled from 'styled-components'

interface StyledInputProps {
	iconExist: boolean
}

export const StyledInput = styled.div<StyledInputProps>`
	input {
		position: relative;
		width: 100%;
		height: 46px;
		padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
		border: 1px solid ${colors.gray_eb};
		border-radius: 4px;
		outline: none;
		::placeholder {
			color: ${colors.gray_76};
		}
		&:focus {
			border-color: ${colors.dark_cyan};
		}
	}
	.icon-wrapper {
		position: absolute;
		top: 0;
		right: 11px;
		height: 46px;
		display: flex;
		align-items: center;
	}
`
