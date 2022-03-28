import { FC, SelectHTMLAttributes } from 'react'

import { useSelector } from '@store/index'
import { StyledSelector } from './selector.styled'

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options?: string[]
	disabledOption?: string
	value?: string
	isValid?: boolean
}

const SelectorComponent: FC<SelectorProps> = ({
	options = [],
	disabledOption = '',
	isValid,
	...props
}) => {
	const { validateMode } = useSelector(state => state.common)

	return (
		<StyledSelector isValid={!!isValid} validateMode={validateMode}>
			<select {...props}>
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
