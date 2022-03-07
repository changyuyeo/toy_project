import { FC } from 'react'
import styled from 'styled-components'

import { useSelector } from '@store/index'
import SignUpModal from '@components/auth/SignUpModal'
import LoginModal from './LoginModal'

const Container = styled.div`
	z-index: 11;
`

interface AuthModalProps {
	onCloseModal: () => void
}

const AuthModal: FC<AuthModalProps> = ({ onCloseModal }) => {
	const { authMode } = useSelector(state => state.auth)

	return (
		<Container>
			{authMode === 'signup' && <SignUpModal onCloseModal={onCloseModal} />}
			{authMode === 'login' && <LoginModal onCloseModal={onCloseModal} />}
		</Container>
	)
}

export default AuthModal
