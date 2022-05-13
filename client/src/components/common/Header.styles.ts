import styled from 'styled-components'
import colors from '@styles/colors'

export const HeaderContainer = styled.div`
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 80px;
	background-color: white;
	border-bottom: 1px solid ${colors.gray_e5};
	z-index: 10;

	.header-logo {
		display: flex;
		align-items: center;
		gap: 8px;
		transition: 500ms;
		&__icon {
			width: 35px;
			fill: ${colors.main_pink};
		}
		&__text {
			font-size: 25px;
			font-weight: 600;
			color: ${colors.main_pink};
		}
		&:hover {
			filter: brightness(80%);
		}
	}

	.header-auth__buttons {
		display: flex;
		align-items: center;
		gap: 5px;
	}
`
