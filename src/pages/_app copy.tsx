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

MyApp.getInitialProps = wrapper.getInitialPageProps(
	store =>
		async ({ req }) => {
			//const cookieObject = cookieStringToObject(ctx.req?.headers.cookie)
			const cookie = req?.headers.cookie
			console.log(req)

			const { user } = store.getState().user
			// const me = axios.create({
			// 	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
			// 	headers: {
			// 		Authorization: cookieObject.auth
			// 	},
			// 	withCredentials: true
			// })
			// try {
			// 	// if (!user && cookieObject.auth) {
			// 	const { data } = await me.get('/')
			// 	console.log(data)
			// 	store.dispatch(setLoggedUser(data))
			// 	//}
			// } catch (error: any) {
			// 	console.error(error)
			// }
		}
)

export default wrapper.withRedux(MyApp)
