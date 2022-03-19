import { useState } from 'react'

import {
	MailIcon,
	OpenedEyeIcon,
	PersonIcon,
	ClosedEyeIcon
} from '@assets/svg/auth'
import useInput from '@hooks/useInput'
import Input from '@stories/Input'
import { SignUpInputWrapper } from './SignUpInput.styled'

const SignUpInput = () => {
	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')

	const [hidePassword, setHidePassword] = useState(true)

	const onToggleHidePassword = () => setHidePassword(prev => !prev)

	return (
		<SignUpInputWrapper>
			<div className="input-wrapper">
				<Input
					type="email"
					placeholder="이메일 주소"
					icon={<MailIcon />}
					value={email}
					onChange={onChangeEmail}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					type="text"
					placeholder="닉네임"
					icon={<PersonIcon />}
					value={nickname}
					onChange={onChangeNickname}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					type={hidePassword ? 'password' : 'text'}
					placeholder="비밀번호 설정하기"
					icon={
						hidePassword ? (
							<OpenedEyeIcon
								onClick={onToggleHidePassword}
								className="icon-cursor"
							/>
						) : (
							<ClosedEyeIcon
								onClick={onToggleHidePassword}
								className="icon-cursor"
							/>
						)
					}
					value={password}
					onChange={onChangePassword}
				/>
			</div>
		</SignUpInputWrapper>
	)
}

export default SignUpInput
