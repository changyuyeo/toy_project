import { useMemo } from 'react'

import { ClosedEyeIcon, MailIcon, OpenedEyeIcon } from '@assets/svg/auth'
import useInput from '@hooks/useInput'
import useToggle from '@hooks/useToggle'
import Button from '@stories/Button'
import Input from '@stories/Input'
import { LoginFormContainer } from './LoginForm.styled'

const LoginForm = () => {
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

	return (
		<LoginFormContainer>
			<div className="login-input">
				<div className="login-input__wrapper">
					<Input
						placeholder="이메일 주소"
						name="email"
						type="email"
						icon={<MailIcon />}
						value={email}
						onChange={onChangeEmail}
					/>
				</div>
				<div className="login-input__wrapper">
					<Input
						placeholder="비밀번호"
						type={hidePassword ? 'password' : 'text'}
						icon={passwordIcon}
						value={password}
						onChange={onChangePassword}
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
