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

	.header-auth__buttons {
		display: flex;
		align-items: center;
		gap: 5px;
	}
`
