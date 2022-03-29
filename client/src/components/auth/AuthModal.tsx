import { FC } from 'react'
import { useDispatch } from 'react-redux'

import SignUpModal from '@components/auth/SignUpModal'
import { useSelector } from '@store/index'
import { setAuthModeAction } from '@store/common/common.actions'
import { TAuthMode } from '@typings/common'
import LoginModal from './LoginModal'

interface Props {
	onCloseModal: () => void
}

const AuthModal: FC<Props> = ({ onCloseModal }) => {
	const dispatch = useDispatch()
	const { authMode } = useSelector(state => state.common)

	const onChangeAuthMode = (mode: TAuthMode) => () =>
		dispatch(setAuthModeAction(mode))

	return (
		<div>
			{authMode === 'signup' && (
				<SignUpModal
					onCloseModal={onCloseModal}
					onChangeLoginMode={onChangeAuthMode('login')}
				/>
			)}
			{authMode === 'login' && (
				<LoginModal
					onCloseModal={onCloseModal}
					onChangeSignUpMode={onChangeAuthMode('signup')}
				/>
			)}
		</div>
	)
}

export default AuthModal
