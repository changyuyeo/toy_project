import styled from 'styled-components'

interface Props {
	styleType: 'month' | 'day' | 'year'
}

export const SignUpSelectorContainer = styled.div`
	display: flex;
	margin-bottom: 24px;
`

export const SelectorWrapper = styled.div<Props>`
	width: ${({ styleType }) =>
		styleType === 'day' ? '25%' : styleType === 'year' && '33%'};
	margin-right: ${({ styleType }) =>
		(styleType === 'month' || styleType === 'day') && '16px'};
	${({ styleType }) => styleType === 'month' && `flex-grow: 1`};
`
