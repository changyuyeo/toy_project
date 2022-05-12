import { FC, FormEvent, useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import {
	MailIcon,
	OpenedEyeIcon,
	PersonIcon,
	ClosedEyeIcon
} from '@assets/svg/auth'
import useInput from '@hooks/useInput'
import useToggle from '@hooks/useToggle'
import {
	DAY_LIST,
	MONTH_LIST,
	YEAR_LIST,
	PASSWORD_MIN_LENGTH
} from '@lib/staticData'
import Button from '@stories/Button'
import Input from '@stories/Input'
import Selector from '@stories/Selector'
import { signUpRequest } from '@store/user/user.actions'
import useFocus from '@hooks/useFocus'
import PasswordWarning from './PasswordWarning'
import { SignUpFormContainer } from './SignUpForm.styled'

interface Props {
	onCloseModal: () => void
	setValidateMode: (value: boolean) => void
}

const SignUpForm: FC<Props> = ({ onCloseModal, setValidateMode }) => {
	const dispatch = useDispatch()

	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [month, onChangeMonth] = useInput<string | undefined>(undefined)
	const [day, onChangeDay] = useInput<string | undefined>(undefined)
	const [year, onChangeYear] = useInput<string | undefined>(undefined)

	const [hidePassword, onToggleHidePassword] = useToggle(true)
	const [passwordFocused, onFocusPassword] = useFocus()

	//* password toggle icon
	const passwordIcon = useMemo(
		() =>
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
			),
		[hidePassword, onToggleHidePassword]
	)

	//* password가 닉네임 또는 이메일에 포함하는지 검사
	const isPasswordHasNameOrEmail = useMemo(
		() =>
			!password ||
			!nickname ||
			password.includes(nickname) ||
			password.includes(email.split('@')[0]),
		[email, nickname, password]
	)

	//* password 최소 자릿수 검사
	const isPasswordOverMinLength = useMemo(
		() => !!password && password.length >= PASSWORD_MIN_LENGTH,
		[password]
	)

	//* password가 숫자 또는 특수기호를 포함하는지 검사
	const isPasswordHasNumberOrSymbol = useMemo(
		() =>
			!(
				/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) ||
				/[0-9]/g.test(password)
			),
		[password]
	)

	//* password validation
	const isPasswordValid = useMemo(
		() =>
			!isPasswordHasNameOrEmail ||
			isPasswordOverMinLength ||
			!isPasswordHasNumberOrSymbol,
		[
			isPasswordHasNameOrEmail,
			isPasswordHasNumberOrSymbol,
			isPasswordOverMinLength
		]
	)

	const passwordWarningWrapper = useMemo(
		() =>
			passwordFocused ? (
				<>
					<PasswordWarning
						isValid={isPasswordHasNameOrEmail}
						text="비밀번호에 닉네임이나 이메일 주소를 포함할 수 없습니다."
					/>
					<PasswordWarning
						isValid={!isPasswordOverMinLength}
						text="비밀번호는 최소 8자이상 으로 작성하세요."
					/>
					<PasswordWarning
						isValid={isPasswordHasNumberOrSymbol}
						text="비밀번호에 숫자나 기호를 포함하세요."
					/>
				</>
			) : null,
		[
			isPasswordHasNameOrEmail,
			isPasswordHasNumberOrSymbol,
			isPasswordOverMinLength,
			passwordFocused
		]
	)

	//* form 입력 값 확인
	const validateSignForm = useMemo(() => {
		const emptyInputData = !email || !nickname || !password
		const emptySelectorData = !day || !month || !year
		const passwordVaild =
			isPasswordHasNameOrEmail ||
			isPasswordHasNumberOrSymbol ||
			!isPasswordOverMinLength

		return emptyInputData || emptySelectorData || passwordVaild ? false : true
	}, [
		day,
		email,
		isPasswordHasNameOrEmail,
		isPasswordHasNumberOrSymbol,
		isPasswordOverMinLength,
		month,
		nickname,
		password,
		year
	])

	//* 회원가입
	const onSubmitSignUp = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			setValidateMode(true)

			if (validateSignForm) {
				const birthday = new Date(
					`${year?.replace('년', '-')}${month?.replace(
						'월',
						'-'
					)}${day?.replace('일', '-')}`
				).toISOString()

				const signUpBody = { email, nickname, password, birthday }
				dispatch(signUpRequest(signUpBody))
				onCloseModal()
			}
		},
		[
			day,
			dispatch,
			email,
			month,
			nickname,
			onCloseModal,
			password,
			setValidateMode,
			validateSignForm,
			year
		]
	)

	useEffect(() => {
		return () => {
			setValidateMode(false)
		}
	}, [setValidateMode])

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
						useValidation
						isValid={!!email}
						errorMessage="이메일은 필수입니다."
					/>
				</div>
				<div className="signup-input__wrapper">
					<Input
						type="text"
						placeholder="닉네임"
						icon={<PersonIcon />}
						value={nickname}
						onChange={onChangeNickname}
						useValidation
						isValid={!!nickname}
						errorMessage="닉네임은 필수입니다."
					/>
				</div>
				<div className="signup-input__wrapper">
					<Input
						type={hidePassword ? 'password' : 'text'}
						placeholder="비밀번호 설정하기"
						icon={passwordIcon}
						value={password}
						onChange={onChangePassword}
						useValidation
						isValid={!!isPasswordValid}
						errorMessage="비밀번호는 필수입니다."
						onFocus={onFocusPassword}
					/>
				</div>
				{passwordWarningWrapper}
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
						options={MONTH_LIST}
						disabledOption="월"
						defaultValue="월"
						value={month}
						onChange={onChangeMonth}
						isValid={!!month}
					/>
				</div>
				<div className="signup-selector--day">
					<Selector
						options={DAY_LIST}
						disabledOption="일"
						defaultValue="일"
						value={day}
						onChange={onChangeDay}
						isValid={!!day}
					/>
				</div>
				<div className="signup-selector--year">
					<Selector
						options={YEAR_LIST}
						disabledOption="년"
						defaultValue="년"
						value={year}
						onChange={onChangeYear}
						isValid={!!year}
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
