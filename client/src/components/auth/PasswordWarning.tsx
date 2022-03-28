import { FC } from 'react'

import { GreenCheckIcon, RedXIcon } from '@assets/svg/auth'
import { PasswordWarningContanier } from './PasswordWarning.styled'

interface Props {
	isValid: boolean
	text: string
}

const PasswordWarning: FC<Props> = ({ isValid, text }) => {
	return (
		<PasswordWarningContanier isValid={isValid}>
			{isValid ? <RedXIcon /> : <GreenCheckIcon />}
			{text}
		</PasswordWarningContanier>
	)
}

export default PasswordWarning
