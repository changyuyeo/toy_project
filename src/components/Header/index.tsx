import Link from 'next/link'

import useModal from '@hooks/useModal'
import { AirbnbLogoIcon, AirbnbLogoTextIcon } from '@assets/svg/logo'
import SignUpModal from '@components/auth/SignUpModal'
import { HeaderContainer } from './styles'

const Header = () => {
	const { onShowModal, ModalPortal } = useModal()

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
					onClick={onShowModal(true)}
				>
					회원가입
				</button>
				<button type="button" className="header-login-button">
					로그인
				</button>
			</div>
			<ModalPortal>
				<SignUpModal onCloseModal={onShowModal(false)} />
			</ModalPortal>
		</HeaderContainer>
	)
}

export default Header
