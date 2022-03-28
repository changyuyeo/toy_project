import { LogoIcon } from '@assets/svg/common'
import Link from 'next/link'
import { LogoContainer } from './Logo.styled'

const Logo = () => {
	return (
		<LogoContainer>
			<Link href="/">
				<a className="header-logo">
					<LogoIcon className="header-logo__icon" />
					<span className="header-logo__text">Logo</span>
				</a>
			</Link>
		</LogoContainer>
	)
}

export default Logo
