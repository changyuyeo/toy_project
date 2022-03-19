import { FC, SelectHTMLAttributes } from 'react'
import { StyledSelector } from './selector.styled'

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options?: string[]
	disabledOption?: string
	value?: string
}

const SelectorComponent: FC<SelectorProps> = props => {
	const { options = [], disabledOption = '', ...selectProps } = props

	return (
		<StyledSelector>
			<select {...selectProps}>
				<option value={disabledOption} disabled>
					{disabledOption}
				</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</StyledSelector>
	)
}

export default SelectorComponent
