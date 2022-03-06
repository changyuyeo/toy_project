import React, { FC } from 'react'
import styled from 'styled-components'

import colors from '@styles/colors'
import { GreenCheckIcon, RedXIcon } from '@assets/svg/auth'

const Container = styled.p<{ isValid: boolean }>`
	color: ${({ isValid }) => (isValid ? colors.davidson_orange : colors.green)};
	display: flex;
	align-items: center;
	svg {
		margin-right: 8px;
	}
`

interface PasswordWarningProps {
	isValid: boolean
	text: string
}

const PasswordWarning: FC<PasswordWarningProps> = ({ isValid, text }) => {
	return (
		<Container isValid={isValid}>
			{isValid ? <RedXIcon /> : <GreenCheckIcon />}
			{text}
		</Container>
	)
}

export default PasswordWarning
