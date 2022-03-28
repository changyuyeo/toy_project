import SignUpModal from '@components/auth/SignUpModal'
import useModal from '@hooks/useModal'
import Logo from './Logo'
import { HeaderContainer } from './Header.styled'

const Header = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<HeaderContainer>
			<Logo />
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
