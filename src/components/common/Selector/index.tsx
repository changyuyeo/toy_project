import { FC, SelectHTMLAttributes } from 'react'

import { useSelector } from '@store/index'
import { SelectorContainer } from './styles'

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options?: string[]
	disabledOptions?: string[]
	value?: string
	isValid?: boolean
}

const Selector: FC<SelectorProps> = ({
	options = [],
	disabledOptions = [],
	isValid,
	...props
}) => {
	const { validateMode } = useSelector(state => state.common)

	return (
		<SelectorContainer
			isValid={!!isValid}
			validateMode={validateMode}
			type="normal"
		>
			<select {...props}>
				{disabledOptions.map((option, index) => (
					<option key={index} value={option} disabled>
						{disabledOptions}
					</option>
				))}
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</SelectorContainer>
	)
}

export default Selector
