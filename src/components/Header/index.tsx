import Link from 'next/link'

import { AirbnbLogoIcon, AirbnbLogoTextIcon } from '@assets/svg/logo'
import { HeaderContainer } from '@components/Header/styles'
import SignUpModal from '@components/auth/SignUpModal'
import useModal from '@hooks/useModal'

const Header = () => {
	const { onToggleModal, ModalPortal } = useModal()

	return (
		<HeaderContainer>
			<Link href="/">
				<a className="header-logo-wrapper">
					<AirbnbLogoIcon className="header-logo" />
					<AirbnbLogoTextIcon />
				</a>
			</Link>
			<div className="header-auth-buttons">
				<button
					type="button"
					className="header-sign-up-button"
					onClick={onToggleModal(true)}
				>
					회원가입
				</button>
				<button type="button" className="header-login-button">
					로그인
				</button>
			</div>
			<ModalPortal>
				<SignUpModal />
			</ModalPortal>
		</HeaderContainer>
	)
}

export default Header
