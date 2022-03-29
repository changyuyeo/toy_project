import { useDispatch } from 'react-redux'

import { HamburgerIcon } from '@assets/svg/common'
import AuthModal from '@components/auth/AuthModal'
import useModal from '@hooks/useModal'
import { useSelector } from '@store/index'
import { setAuthModeAction } from '@store/common/common.actions'
import { TAuthMode } from '@typings/common'
import { HeaderContainer } from './Header.styled'
import Logo from './Logo'

const Header = () => {
	const dispatch = useDispatch()
	const { myData } = useSelector(state => state.user)

	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	const onOpenAuthModel = (mode: TAuthMode) => () => {
		dispatch(setAuthModeAction(mode))
		onOpenModal()
	}

	return (
		<HeaderContainer>
			<Logo />
			{myData ? (
				<button className="header-user-profile" type="button">
					<HamburgerIcon />
					<img
						src={myData.imgUrl}
						alt={myData.nickname}
						className="header-user-profile__image"
					/>
				</button>
			) : (
				<div className="header-auth__buttons">
					<button type="button" onClick={onOpenAuthModel('signup')}>
						회원가입
					</button>
					<button type="button" onClick={onOpenAuthModel('login')}>
						로그인
					</button>
				</div>
			)}
			<ModalPortal>
				<AuthModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</HeaderContainer>
	)
}

export default Header
