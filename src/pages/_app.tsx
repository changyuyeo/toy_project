import { AppProps } from 'next/app'

import Header from '@components/Header'
import GlobalStyle from '@styles/GlobalStyled'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<Component {...pageProps} />
		<div id="root-modal" />
	</>
)

export default MyApp
