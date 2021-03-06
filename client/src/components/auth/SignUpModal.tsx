import { FC } from 'react'

import { CloseIcon } from '@assets/svg/common'
import SignUpForm from './SignUpForm'
import { SignUpModalContainer } from './SignUpModal.styled'

interface Props {
	onCloseModal: () => void
	onChangeLoginMode: () => void
	setValidateMode: (value: boolean) => void
}

const SignUpModal: FC<Props> = ({
	onCloseModal,
	onChangeLoginMode,
	setValidateMode
}) => {
	return (
		<SignUpModalContainer>
			<CloseIcon className="close-icon" onClick={onCloseModal} />
			<SignUpForm
				onCloseModal={onCloseModal}
				setValidateMode={setValidateMode}
			/>
			<div className="set-login">
				<p>이미 계정이 있나요?</p>
				<span
					className="set-login__button"
					role="presentation"
					onClick={onChangeLoginMode}
				>
					로그인
				</span>
			</div>
		</SignUpModalContainer>
	)
}

export default SignUpModal
