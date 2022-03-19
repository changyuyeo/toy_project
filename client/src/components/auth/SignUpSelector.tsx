import useInput from '@hooks/useInput'
import { monthList, dayList, yearList } from '@lib/staticData'
import Selector from '@stories/Selector'
import {
	SignUpSelectorContainer,
	SelectorWrapper
} from './SignUpSelector.styled'

const SignUpSelector = () => {
	//* 상태관리 필요
	const [birthMonth, onChangeBirthMonth] = useInput<string | undefined>()
	const [birthDay, onChangeBirthDay] = useInput<string | undefined>()
	const [birthYear, onChangeBirthYear] = useInput<string | undefined>()

	return (
		<SignUpSelectorContainer>
			<SelectorWrapper styleType="month">
				<Selector
					options={monthList}
					disabledOption="월"
					defaultValue="월"
					value={birthMonth}
					onChange={onChangeBirthMonth}
				/>
			</SelectorWrapper>
			<SelectorWrapper styleType="day">
				<Selector
					options={dayList}
					disabledOption="일"
					defaultValue="일"
					value={birthDay}
					onChange={onChangeBirthDay}
				/>
			</SelectorWrapper>
			<SelectorWrapper styleType="year">
				<Selector
					options={yearList}
					disabledOption="년"
					defaultValue="년"
					value={birthYear}
					onChange={onChangeBirthYear}
				/>
			</SelectorWrapper>
		</SignUpSelectorContainer>
	)
}

export default SignUpSelector
