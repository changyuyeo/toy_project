import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import { HamburgerIcon } from '@assets/svg/header'
import { AirbnbLogoIcon, AirbnbLogoTextIcon } from '@assets/svg/logo'
import useModal from '@hooks/useModal'
import { useSelector } from '@store/index'
import { AuthState, setAuthMode } from '@store/auth'
import AuthModal from '@components/auth/AuthModal'
import { HeaderContainer } from './styles'

const Header = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.user)

	const { onShowModal, ModalPortal } = useModal()

	const onClickMenu = useCallback(
		(mode: AuthState['authMode']) => () => {
			dispatch(setAuthMode(mode))
			onShowModal(true)()
		},
		[dispatch, onShowModal]
	)

	return (
		<HeaderContainer>
			<Link href="/">
				<a className="header-logo-wrapper">
					<AirbnbLogoIcon className="header-logo" />
					<AirbnbLogoTextIcon />
				</a>
			</Link>
			{user ? (
				<button type="button" className="header-user-profile">
					<HamburgerIcon />
					<img
						src={
							user.profileImage === 'defalut'
								? 'static/image/user/default_user_profile_image.jpg'
								: user.profileImage
						}
						className="header-user-profile-image"
						alt="userProfileImage"
					/>
				</button>
			) : (
				<div className="header-auth-buttons">
					<button
						type="button"
						className="header-sign-up-button"
						onClick={onClickMenu('signup')}
					>
						회원가입
					</button>
					<button
						type="button"
						className="header-login-button"
						onClick={onClickMenu('login')}
					>
						로그인
					</button>
				</div>
			)}
			<ModalPortal>
				<AuthModal onCloseModal={onShowModal(false)} />
			</ModalPortal>
		</HeaderContainer>
	)
}

export default Header
