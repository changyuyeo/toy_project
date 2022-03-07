import styled, { css } from 'styled-components'
import colors from '@styles/colors'

const normalSelectorStyle = css`
	width: 100%;
	height: 46px;
	select {
		width: 100%;
		height: 100%;
		background-color: white;
		border: 1px solid ${colors.gray_eb};
		font-size: 16px;
		padding: 0 11px;
		border-radius: 4px;
		outline: none;
		-webkit-appearance: none;
		background-image: url('/static/svg/common/selector/selector_down_arrow.svg');
		background-position: right 11px center;
		background-repeat: no-repeat;
		&:focus {
			border-color: ${colors.dark_cyan};
		}
	}
`

const RegisterSelectorStyle = css`
	width: 100%;
	label {
		position: relative;
	}
	span {
		display: block;
		font-size: 16px;
		color: ${colors.gray_76};
		font-weight: 600;
		margin-bottom: 8px;
	}
	select {
		width: 100%;
		height: 56px;
		border-radius: 8px;
		border: 1px solid ${colors.gray_b0};
		padding: 0 14px 0 12px;
		appearance: none;
		outline: none;
		-webkit-appearance: none;
		background-image: url('/static/svg/common/selector/register_selector_down_arrow.svg');
		background-position: right 14px center;
		background-repeat: no-repeat;
		font-size: 16px;
	}
`

interface SelectorContainerProps {
	isValid: boolean
	validateMode: boolean
	type: 'register' | 'normal'
}

export const SelectorContainer = styled.div<SelectorContainerProps>`
	${({ type }) => type === 'normal' && normalSelectorStyle};
	${({ type }) => type === 'register' && RegisterSelectorStyle};
	select {
		${({ validateMode, isValid }) => {
			if (validateMode) {
				if (!isValid) {
					return css`
						border-color: ${colors.tawny};
						background-color: ${colors.snow};
					`
				}
				return css`
					border-color: ${colors.dark_cyan};
				`
			}
			return undefined
		}}
		&:disabled {
			background-image: url('/static/svg/common/selector/disabled_register_selector_down_arrow.svg');
			background-color: ${colors.gray_f7};
			border-color: ${colors.gray_e5};
			color: ${colors.gray_e5};
			cursor: not-allowed;
		}
	}
	.selector-warning {
		margin-top: 8px;
		display: flex;
		align-items: center;
		svg {
			margin-right: 4px;
		}
		p {
			font-size: 12px;
			color: ${colors.davidson_orange};
		}
	}
`
