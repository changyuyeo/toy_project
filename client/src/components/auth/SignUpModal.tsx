import { FC } from 'react'

import { CloseIcon } from '@assets/svg/common'
import Button from '@stories/Button'
import SignUpInput from './SignUpInput'
import SignUpSelector from './SignUpSelector'
import { ButtonWrapper, SignUpModalContainer } from './SignUpModal.styles'

interface Props {
	onCloseModal: () => void
}

const SignUpModal: FC<Props> = ({ onCloseModal }) => {
	return (
		<SignUpModalContainer>
			<CloseIcon className="close-icon" onClick={onCloseModal} />
			<SignUpInput />
			<div className="description">
				<p className="description__label">생일</p>
				<p className="description__info">
					만 18세 이상의 성인만 회원으로 가입할 수 있습니다. <br />
					생일은 다른 사용자에게 공개되지 않습니다.
				</p>
			</div>
			<SignUpSelector />
			<ButtonWrapper>
				<Button type="submit">가입하기</Button>
			</ButtonWrapper>
		</SignUpModalContainer>
	)
}

export default SignUpModal
