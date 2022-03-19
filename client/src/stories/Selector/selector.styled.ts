import colors from '@styles/colors'
import styled from 'styled-components'

export const StyledSelector = styled.div`
	width: 100%;
	height: 46px;

	select {
		width: 100%;
		height: 100%;
		background-color: white;
		border: 1px solid ${colors.gray_eb};
		padding: 0 11px;
		border-radius: 4px;
		outline: none;
		-webkit-appearance: none;
		background-image: url('/svg/common/selector/selector_down_arrow.svg');
		background-position: right 11px center;
		background-repeat: no-repeat;
		font-size: 16px;
		&:focus {
			border-color: ${colors.dark_cyan};
		}
	}
`
