import { FC, useCallback, useState } from 'react'

import {
	ClosedEyeIcon,
	MailIcon,
	OpenedEyeIcon,
	PersonIcon
} from '@assets/svg/auth'
import { CloseXIcon } from '@assets/svg/modal'
import useInput from '@hooks/useInput'
import { dayList, monthList, yearList } from '@lib/staticData'
import Input from '@components/common/Input'
import Selector from '@components/common/Selector'
import Button from '@components/common/Button'
import { Container } from './styles'

interface SignUpModalProps {
	onCloseModal: () => void
}

const SignUpModal: FC<SignUpModalProps> = ({ onCloseModal }) => {
	const [email, onChangeEamil] = useInput('')
	const [lastname, onChangeLastname] = useInput('')
	const [firstname, onChangeFirstname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [birthMonth, onChangeBirthMonth] = useInput()
	const [birthDay, onChangeBirthDay] = useInput()
	const [birthYear, onChangeBirthYear] = useInput()

	const [hidePassword, setHidePassword] = useState(true)

	const onToggleHidePasswoed = useCallback(
		() => setHidePassword(prev => !prev),
		[]
	)

	return (
		<Container>
			<CloseXIcon className="modal-close-x-icon" onClick={onCloseModal} />
			<div className="input-wrapper">
				<Input
					type="email"
					placeholder="이메일 주소"
					icon={<MailIcon />}
					value={email}
					onChange={onChangeEamil}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="이름 (예: 제봉)"
					icon={<PersonIcon />}
					value={lastname}
					onChange={onChangeLastname}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="성 (예: 박)"
					icon={<PersonIcon />}
					value={firstname}
					onChange={onChangeFirstname}
				/>
			</div>
			<div className="input-wrapper sign-up-password-input-wrapper">
				<Input
					type={hidePassword ? 'password' : 'text'}
					placeholder="비밀번호"
					icon={
						hidePassword ? (
							<ClosedEyeIcon onClick={onToggleHidePasswoed} />
						) : (
							<OpenedEyeIcon onClick={onToggleHidePasswoed} />
						)
					}
					value={password}
					onChange={onChangePassword}
				/>
			</div>
			<p className="sign-up-birthdat-label">생일</p>
			<p className="sign-up-modal-birthday-info">
				만 18세 이상의 성인만 회원으로 가입할 수 있습니다. <br />
				생일은 다른 에어비앤비 이용자에게 공개되지 않습니다.
			</p>
			<div className="sign-up-modal-birthday-selectors">
				<div className="sign-up-modal-birthday-month-selector">
					<Selector
						options={monthList}
						disabledOptions={['월']}
						defaultValue="월"
						value={birthMonth}
						onChange={onChangeBirthMonth}
					/>
				</div>
				<div className="sign-up-modal-birthday-day-selector">
					<Selector
						options={dayList}
						disabledOptions={['일']}
						defaultValue="일"
						value={birthDay}
						onChange={onChangeBirthDay}
					/>
				</div>
				<div className="sign-up-modal-birthday-year-selector">
					<Selector
						options={yearList}
						disabledOptions={['년']}
						defaultValue="년"
						value={birthYear}
						onChange={onChangeBirthYear}
					/>
				</div>
			</div>
			<div className="sign-up-modal-submit-button-wrapper">
				<Button type="submit">가입하기</Button>
			</div>
		</Container>
	)
}

export default SignUpModal
