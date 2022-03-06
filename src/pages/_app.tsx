import { AppProps } from 'next/app'

import GlobalStyle from '@styles/GlobalStyled'
import Header from '@components/Header'
import { wrapper } from '@store/index'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<Component {...pageProps} />
		<div id="root-modal" />
	</>
)

export default wrapper.withRedux(MyApp)
