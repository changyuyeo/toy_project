import styled from 'styled-components'
import colors from '@styles/colors'

export const LogoContainer = styled.div`
	.header-logo {
		display: flex;
		align-items: center;
		gap: 8px;
		transition: 500ms;
		&__icon {
			width: 35px;
			fill: ${colors.black};
		}
		&__text {
			font-size: 25px;
			font-weight: 600;
			color: ${colors.black};
		}
		&:hover {
			filter: brightness(80%);
		}
	}
`
