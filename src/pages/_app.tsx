import NextApp, { AppContext, AppProps } from 'next/app'
import axios from 'axios'

import Header from '@components/Header'
import { wrapper } from '@store/index'
import GlobalStyle from '@styles/GlobalStyled'
import { cookieStringToObject } from '@utils/cookies'
import { setLoggedUser } from '@store/user'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<Component {...pageProps} />
		<div id="root-modal" />
	</>
)

MyApp.getInitialProps = wrapper.getInitialPageProps(store => async context => {
	const cookieObject = cookieStringToObject(context.req?.headers.cookie)
	console.log(context.req?.headers.cookie)
	console.log(context.isServer)

	const { user } = store.getState().user
	// try {
	// 	if (!isLogged && cookieObject.access_token) {
	// 		axios.defaults.headers.cookie = cookieObject.access_token
	// 		const { data } = await meAPI()
	// 		store.dispatch(userActions.setLoggedUser(data))
	// 	}
	// } catch (e) {
	// 	console.log(e.message)
	// }
	// return { ...appInitialProps })
})

export default wrapper.withRedux(MyApp)
