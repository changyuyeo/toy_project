import { FC, FormEvent, useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { ClosedEyeIcon, MailIcon, OpenedEyeIcon } from '@assets/svg/auth'
import useInput from '@hooks/useInput'
import useToggle from '@hooks/useToggle'
import Button from '@stories/Button'
import Input from '@stories/Input'
import { logInRequest } from '@store/user/user.actions'
import { LoginFormContainer } from './LoginForm.styled'

interface Props {
	setValidateMode: (value: boolean) => void
}

const LoginForm: FC<Props> = ({ setValidateMode }) => {
	const dispatch = useDispatch()

	const [email, onChangeEmail] = useInput('')
	const [password, onChangePassword] = useInput('')

	const [hidePassword, onToggleHidePassword] = useToggle(true)

	//* password toggle icon
	const passwordIcon = useMemo(
		() =>
			hidePassword ? (
				<OpenedEyeIcon
					onClick={onToggleHidePassword}
					className="login-input--cursor"
				/>
			) : (
				<ClosedEyeIcon
					onClick={onToggleHidePassword}
					className="login-input--cursor"
				/>
			),
		[hidePassword, onToggleHidePassword]
	)

	//* 로그인
	const onSubmitLogin = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			setValidateMode(true)

			if (email && password) {
				const loginBody = { email, password }
				dispatch(logInRequest(loginBody))
			}
		},
		[dispatch, email, password, setValidateMode]
	)

	useEffect(() => {
		return () => {
			setValidateMode(false)
		}
	}, [setValidateMode])

	return (
		<LoginFormContainer onSubmit={onSubmitLogin}>
			<div className="login-input">
				<div className="login-input__wrapper">
					<Input
						placeholder="이메일 주소"
						name="email"
						type="email"
						icon={<MailIcon />}
						value={email}
						onChange={onChangeEmail}
						useValidation
						isValid={!!email}
						errorMessage="이메일은 필수입니다."
					/>
				</div>
				<div className="login-input__wrapper">
					<Input
						placeholder="비밀번호"
						type={hidePassword ? 'password' : 'text'}
						icon={passwordIcon}
						value={password}
						onChange={onChangePassword}
						useValidation
						isValid={!!password}
						errorMessage="비밀번호는 필수입니다."
					/>
				</div>
			</div>
			<div className="login-button">
				<Button type="submit">로그인</Button>
			</div>
		</LoginFormContainer>
	)
}

export default LoginForm
