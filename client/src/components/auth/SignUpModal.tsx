import { FC } from 'react'

import { CloseIcon } from '@assets/svg/common'
import SignUpForm from './SignUpForm'
import { SignUpModalContainer } from './SignUpModal.styled'

interface Props {
	onCloseModal: () => void
}

const SignUpModal: FC<Props> = ({ onCloseModal }) => {
	return (
		<SignUpModalContainer>
			<CloseIcon className="close-icon" onClick={onCloseModal} />
			<SignUpForm />
		</SignUpModalContainer>
	)
}

export default SignUpModal
