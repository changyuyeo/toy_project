import { FC, FormEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ClosedEyeIcon, MailIcon, OpenedEyeIcon } from '@assets/svg/auth'
import { CloseXIcon } from '@assets/svg/modal'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import useInput from '@hooks/useInput'
import useValidateMode from '@hooks/useValidateMode'
import { setAuthMode } from '@store/auth'
import { loginAction } from '@store/user/actions'
import { LoginModalContainer } from './styles'

interface LoginModalProps {
	onCloseModal: () => void
}

const LoginModal: FC<LoginModalProps> = ({ onCloseModal }) => {
	const dispatch = useDispatch()

	const { onChangeValidateMode } = useValidateMode()

	const [email, onChangeEmail] = useInput('')
	const [password, onChangePassword] = useInput('')

	const [hidePassword, setHidePassword] = useState(true)

	useEffect(() => {
		return () => {
			onChangeValidateMode(false)
		}
	}, [onChangeValidateMode])

	const onToggleHidePasswoed = useCallback(
		() => setHidePassword(prev => !prev),
		[]
	)

	const onChangeToSignUpModal = useCallback(
		() => dispatch(setAuthMode('signup')),
		[dispatch]
	)

	const onSubmitLogin = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			onChangeValidateMode(true)
			if (!email || !password)
				return alert('이메일 또는 비밀번호를 입력해주세요.')
			dispatch(loginAction({ email, password }))
			onCloseModal()
		},
		[dispatch, email, onChangeValidateMode, onCloseModal, password]
	)

	return (
		<LoginModalContainer onSubmit={onSubmitLogin}>
			<CloseXIcon className="modal-close-x-icon" onClick={onCloseModal} />
			<div className="login-input-wrapper">
				<Input
					placeholder="이메일 주소"
					type="email"
					icon={<MailIcon />}
					value={email}
					onChange={onChangeEmail}
					isValid={!!email}
					errorMessage="이메일이 필요합니다."
				/>
			</div>
			<div className="login-input-wrapper login-password-input-wrapper">
				<Input
					placeholder="비밀번호"
					type={hidePassword ? 'password' : 'text'}
					icon={
						hidePassword ? (
							<ClosedEyeIcon onClick={onToggleHidePasswoed} />
						) : (
							<OpenedEyeIcon onClick={onToggleHidePasswoed} />
						)
					}
					value={password}
					onChange={onChangePassword}
					isValid={!!password}
					errorMessage="비밀번호를 입력하세요."
				/>
			</div>
			<div className="login-modal-submit-button-wrapper">
				<Button type="submit">로그인</Button>
			</div>
			<p>
				에어비앤비 계정이 없으신가요?
				<span
					className="login-modal-set-signup"
					role="presentation"
					onClick={onChangeToSignUpModal}
				>
					회원가입
				</span>
			</p>
		</LoginModalContainer>
	)
}

export default LoginModal
