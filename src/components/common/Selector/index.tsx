import { FC, SelectHTMLAttributes } from 'react'

import { SelectorContainer } from './styles'

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options?: string[]
	disabledOptions?: string[]
	value?: string
}

const Selector: FC<SelectorProps> = ({
	options = [],
	disabledOptions = [],
	...props
}) => {
	return (
		<SelectorContainer>
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
