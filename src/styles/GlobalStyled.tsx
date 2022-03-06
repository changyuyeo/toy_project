import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

import colors from '@styles/colors'

const globalStyle = css`
	${reset};
	* {
		box-sizing: border-box;
	}
	body {
		font-family: Noto Sans, Noto Sans KR;
		color: ${colors.black};
		line-height: 1.2;
	}
	a {
		text-decoration: none;
		color: ${colors.black};
	}
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
