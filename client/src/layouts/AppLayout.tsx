import { FC, ReactNode } from 'react'
import Header from '@components/common/Header'

interface Props {
	children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default AppLayout
