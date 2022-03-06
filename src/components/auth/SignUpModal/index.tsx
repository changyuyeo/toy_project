import { FC, FormEvent, useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
	ClosedEyeIcon,
	MailIcon,
	OpenedEyeIcon,
	PersonIcon
} from '@assets/svg/auth'
import { CloseXIcon } from '@assets/svg/modal'
import useInput from '@hooks/useInput'
import useValidateMode from '@hooks/useValidateMode'
import { dayList, monthList, yearList } from '@lib/staticData'
import { signUpAction } from '@store/user/actions'
import Input from '@components/common/Input'
import Selector from '@components/common/Selector'
import Button from '@components/common/Button'
import { Container } from './styles'
import PasswordWarning from '../PasswordWarning'

interface SignUpModalProps {
	onCloseModal: () => void
}

const PASSWORD_MIN_LENGTH = 8 as const

const SignUpModal: FC<SignUpModalProps> = ({ onCloseModal }) => {
	const dispatch = useDispatch()
	const { onChangeValidateMode } = useValidateMode()

	const [email, onChangeEamil] = useInput('')
	const [lastname, onChangeLastname] = useInput('')
	const [firstname, onChangeFirstname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [birthMonth, onChangeBirthMonth] = useInput()
	const [birthDay, onChangeBirthDay] = useInput()
	const [birthYear, onChangeBirthYear] = useInput()

	const [hidePassword, setHidePassword] = useState(true)
	const [passwordFocused, setPasswordFocused] = useState(false)

	const onToggleHidePasswoed = useCallback(
		() => setHidePassword(prev => !prev),
		[]
	)

	const onFocusPassword = useCallback(() => setPasswordFocused(true), [])

	//* input validate
	const isPasswordHasNameOrEmail = useMemo(
		() =>
			!password ||
			!lastname ||
			password.includes(lastname) ||
			password.includes(email.split('@')[0]),
		[email, lastname, password]
	)

	//* password validate
	const isPasswordOverMinLength = useMemo(
		() => !!password && password.length >= PASSWORD_MIN_LENGTH,
		[password]
	)

	const isPasswordHasNumberOrSymbol = useMemo(
		() =>
			!(
				/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) ||
				/[0-9]/g.test(password)
			),
		[password]
	)

	const birthday = useMemo(
		() =>
			birthYear &&
			birthMonth &&
			birthDay &&
			new Date(
				`${birthYear}-${birthMonth.replace('월', '')}-${birthDay}`
			).toISOString(),
		[birthDay, birthMonth, birthYear]
	)

	const onSubmitSignUp = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			onChangeValidateMode(true)
			const userData = {
				email,
				lastname,
				firstname,
				password,
				birthday
			}
			dispatch(signUpAction(userData))
		},
		[
			birthday,
			dispatch,
			email,
			firstname,
			lastname,
			onChangeValidateMode,
			password
		]
	)

	return (
		<Container onSubmit={onSubmitSignUp}>
			<CloseXIcon className="modal-close-x-icon" onClick={onCloseModal} />
			<div className="input-wrapper">
				<Input
					type="email"
					placeholder="이메일 주소"
					icon={<MailIcon />}
					value={email}
					onChange={onChangeEamil}
					useValidation
					isValid={!!email}
					errorMessage="이메일은 필수입니다!"
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="이름 (예: 제봉)"
					icon={<PersonIcon />}
					value={lastname}
					onChange={onChangeLastname}
					useValidation
					isValid={!!lastname}
					errorMessage="이름은 필수입니다!"
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="성 (예: 박)"
					icon={<PersonIcon />}
					value={firstname}
					onChange={onChangeFirstname}
					useValidation
					isValid={!!firstname}
					errorMessage="성은 필수입니다!"
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
					useValidation
					isValid={
						!isPasswordHasNameOrEmail &&
						isPasswordOverMinLength &&
						!isPasswordHasNumberOrSymbol
					}
					errorMessage="비밀번호는 필수입니다!"
					onFocus={onFocusPassword}
				/>
			</div>
			{passwordFocused && (
				<>
					<PasswordWarning
						isValid={isPasswordHasNameOrEmail}
						text="비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다."
					/>
					<PasswordWarning isValid={!isPasswordOverMinLength} text="최소 8자" />
					<PasswordWarning
						isValid={isPasswordHasNumberOrSymbol}
						text="숫자나 기호를 포함하세요."
					/>
				</>
			)}
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
