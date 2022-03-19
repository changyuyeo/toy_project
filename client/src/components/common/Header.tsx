import Link from 'next/link'

import { LogoIcon } from '@assets/svg/common'
import SignUpModal from '@components/auth/SignUpModal'
import { HeaderContainer } from '@components/common/Header.styles'
import useModal from '@hooks/useModal'

const Header = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<HeaderContainer>
			<Link href="/">
				<a className="header-logo">
					<LogoIcon className="header-logo__icon" />
					<span className="header-logo__text">Changyu</span>
				</a>
			</Link>
			<div className="header-auth__buttons">
				<button type="button" onClick={onOpenModal}>
					회원가입
				</button>
				<button type="button">로그인</button>
			</div>
			<ModalPortal>
				<SignUpModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</HeaderContainer>
	)
}

export default Header
