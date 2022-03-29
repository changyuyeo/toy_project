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

	.header-user-profile {
		display: flex;
		align-items: center;
		height: 42px;
		padding: 0 6px 0 16px;
		border: 0;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
		border-radius: 21px;
		background-color: white;
		cursor: pointer;
		outline: none;
		&:hover {
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
		}
		&__image {
			margin-left: 8px;
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}
	}
`
