import { FC } from 'react'

import { CloseIcon } from '@assets/svg/common'
import LoginForm from './LoginForm'
import { LoginModalContainer } from './LoginModal.styled'

interface Props {
	onCloseModal: () => void
	onChangeSignUpMode: () => void
	setValidateMode: (value: boolean) => void
}

const LoginModal: FC<Props> = ({
	onCloseModal,
	onChangeSignUpMode,
	setValidateMode
}) => {
	return (
		<LoginModalContainer>
			<CloseIcon className="close-icon" onClick={onCloseModal} />
			<LoginForm setValidateMode={setValidateMode} />
			<div className="set-signup">
				<p>아직 회원이 아니신가요?</p>
				<span
					className="set-signup__button"
					role="presentation"
					onClick={onChangeSignUpMode}
				>
					회원가입
				</span>
			</div>
		</LoginModalContainer>
	)
}

export default LoginModal
