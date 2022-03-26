import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import {
	MailIcon,
	OpenedEyeIcon,
	PersonIcon,
	ClosedEyeIcon
} from '@assets/svg/auth'
import useInput from '@hooks/useInput'
import useToggle from '@hooks/useToggle'
import { monthList, dayList, yearList } from '@lib/staticData'
import { signUpRequest } from '@store/user/user.actions'
import Button from '@stories/Button'
import Input from '@stories/Input'
import Selector from '@stories/Selector'
import { SignUpFormContainer } from './SignUpForm.styled'

const SignUpForm = () => {
	const dispatch = useDispatch()

	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [month, onChangeMonth] = useInput<string | undefined>(undefined)
	const [day, onChangeDay] = useInput<string | undefined>(undefined)
	const [year, onChangeYear] = useInput<string | undefined>(undefined)

	const [hidePassword, onToggleHidePassword] = useToggle(true)

	const onSubmitSignUp = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (year && month && day) {
			const birthday = new Date(
				`${year.replace('년', '-')}${month.replace('월', '-')}${day.replace(
					'일',
					'-'
				)}`
			).toISOString()

			const signUpBody = { email, nickname, password, birthday }
			dispatch(signUpRequest(signUpBody))
		}
	}

	return (
		<SignUpFormContainer onSubmit={onSubmitSignUp}>
			<div className="signup-input">
				<div className="signup-input__wrapper">
					<Input
						type="email"
						placeholder="이메일 주소"
						icon={<MailIcon />}
						value={email}
						onChange={onChangeEmail}
					/>
				</div>
				<div className="signup-input__wrapper">
					<Input
						type="text"
						placeholder="닉네임"
						icon={<PersonIcon />}
						value={nickname}
						onChange={onChangeNickname}
					/>
				</div>
				<div className="signup-input__wrapper">
					<Input
						type={hidePassword ? 'password' : 'text'}
						placeholder="비밀번호 설정하기"
						icon={
							hidePassword ? (
								<OpenedEyeIcon
									onClick={onToggleHidePassword}
									className="signup-input--cursor"
								/>
							) : (
								<ClosedEyeIcon
									onClick={onToggleHidePassword}
									className="signup-input--cursor"
								/>
							)
						}
						value={password}
						onChange={onChangePassword}
					/>
				</div>
			</div>
			<div className="signup-description">
				<p className="signup-description__label">생일</p>
				<p className="signup-description__info">
					만 18세 이상의 성인만 회원으로 가입할 수 있습니다. <br />
					생일은 다른 사용자에게 공개되지 않습니다.
				</p>
			</div>
			<div className="signup-selector">
				<div className="signup-selector--month">
					<Selector
						options={monthList}
						disabledOption="월"
						defaultValue="월"
						value={month}
						onChange={onChangeMonth}
					/>
				</div>
				<div className="signup-selector--day">
					<Selector
						options={dayList}
						disabledOption="일"
						defaultValue="일"
						value={day}
						onChange={onChangeDay}
					/>
				</div>
				<div className="signup-selector--year">
					<Selector
						options={yearList}
						disabledOption="년"
						defaultValue="년"
						value={year}
						onChange={onChangeYear}
					/>
				</div>
			</div>
			<div className="signup-button">
				<Button type="submit">가입하기</Button>
			</div>
		</SignUpFormContainer>
	)
}

export default SignUpForm